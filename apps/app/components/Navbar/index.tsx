import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
  const { route } = useRouter();
  const [navSelection, setNavSelection] = React.useState<number>(0);
  const navOptions = [
    { title: 'home', url: '/' },
    { title: 'create', url: '/create' },
    { title: 'login/signup', url: '/login' },
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
      </ul>
    </nav>
  );
};
