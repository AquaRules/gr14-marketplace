import React from 'react';
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
  const [navSelection, setNavSelection] = React.useState<number>(0);
  const navOptions = [
    { title: 'home' },
    { title: 'create' },
    { title: 'login/signup' },
  ];
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
              onClick={()=>setNavSelection(i)}
            >
              {v.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
