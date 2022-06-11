import React from 'react';
import styles from './index.module.scss';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.wrapper}>
        <h1 className={styles.logo}>GR14 Marketplace</h1>
        <ul className={styles.buttons}>
          <li className={styles.button} datatype='active'>Home</li>
          <li className={styles.button}>Create</li>
          <li className={styles.button}>Login/Signup</li>
        </ul>
    </nav>
  );
};
