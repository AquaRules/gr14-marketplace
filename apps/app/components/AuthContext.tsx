import { useMetaMask } from 'metamask-react';
import React, { useContext } from 'react';

type User = { name: string; address: string };

interface AuthContextType {
  user?: User;
  login?: () => void;
  logout?: () => void;
  setUserName?: (name: string) => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = React.useState<User>({ name: '', address: '' });
  const { account } = useMetaMask();

  const setUserName = async (name: string) => {
    const res = await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify({ address: account, name }),
    });
    if (res.status == 201) {
      user.name = name;
    } else if (res.status == 400) {
      // exists
    } else {
      // errored out
    }
  };

  const login = async () => {
    const newUser = {
      name: '',
      address: account,
    };
    const res = await fetch(`/api/user/${account}`);
    if (res.status == 404) {
      // user not found
    } else if (res.status == 200) {
      const data = await res.json();
      newUser.name = data.message;
    } else {
      // errored out
    }
    newUser.address = account;
    setUser(newUser);
  };

  const logout = () => {
    setUser({ name: '', address: '' });
  };

  const memoedValues = React.useMemo(
    () => ({ user, login, logout, setUserName }),
    [user]
  );

  return (
    <AuthContext.Provider value={memoedValues}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
