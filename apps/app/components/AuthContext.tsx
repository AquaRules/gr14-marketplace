import { useMetaMask } from 'metamask-react';
import React, { useContext } from 'react';

type User = { name: string; address: string };

interface AuthContextType {
  user?: User;
  login?: () => User;
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
  const { connect, account } = useMetaMask();

  const setUserName = (name: string) => (user.name = name);

  const login = () => {
    const newUser = {
      name: '',
      address: account,
    };
    connect()
      .then(() => {
        newUser.address = account;
      })
      .catch(() => {
        console.log('Error while connecting to metamask.');
      });
    setUser(newUser);
    return newUser;
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
