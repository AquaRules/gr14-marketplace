import { useMetaMask } from 'metamask-react';
import React, { useContext } from 'react';

type User = { name: string; address: string };

interface AuthContextType {
  user?: User;
  login?: () => void;
  logout?: () => void;
  setUserName?: (name: string) => void;
  connected?: boolean;
  setConnected?: any;
  loggedIn?: boolean;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = React.useState<User>({ name: '', address: '' });
  const { account, status } = useMetaMask();
  const [connected, setConnected] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const setUserName = async (name: string) => {
    const updateUser = user;
    const res = await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify({ address: account, name }),
    });
    if (res.status == 201) {
      updateUser.name = name;
      updateUser.address = account;
      setUser(updateUser);
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
      newUser.address = account;
    } else {
      // errored out
    }
    setUser(newUser);
  };

  const logout = () => {
    setUser({ name: '', address: '' });
    setConnected(false);
  };

  React.useEffect(() => {
    if (account && account.length > 10 && status == "connected") setConnected(true);
  }, [account]);

  React.useEffect(()=>{
    if(user && account && user.name.length > 3 && user.address.length > 10 && account.length > 10) setLoggedIn(true)
    else setLoggedIn(false)
  },[user, connected, account])

  const memoedValues = React.useMemo(
    () => ({ user, login, logout, setUserName, connected, setConnected, loggedIn }),
    [user]
  );

  return (
    <AuthContext.Provider value={memoedValues}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
