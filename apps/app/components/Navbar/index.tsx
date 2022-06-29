import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useAuth from '../AuthContext';
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
  const { route } = useRouter();
  const { user, logout } = useAuth();
  const [navSelection, setNavSelection] = React.useState<number>(0);
  const navOptions = [
    { title: 'home', url: '/' },
    { title: 'create', url: '/create' },
  ];
  React.useEffect(() => {
    setNavSelection(navOptions.findIndex((v) => v.url == route));
  }, []);
  return (
    <nav className={styles.wrapper}>
      <h1 className={styles.logo}>GR14 Marketplace</h1>
      <ul className={styles.buttons}>
        {navOptions.map((v, i) => {
          return (
            <li
              className={styles.button}
              key={i}
              datatype={i == navSelection ? 'active' : ''}
              onClick={() => setNavSelection(i)}
            >
              <Link href={v.url}>{v.title}</Link>
            </li>
          );
        })}
        {user.address != '' ? (
          <li className={styles.button} onClick={logout}>
            Logout
          </li>
        ) : (
          <li
            className={styles.button}
            key="login"
            datatype={3 == navSelection ? 'active' : ''}
            onClick={() => setNavSelection(3)}
          >
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
