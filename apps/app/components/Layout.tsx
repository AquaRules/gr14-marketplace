import React, { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import styles from './layout.module.scss';
import Image from "next/image"

export const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <Navbar />
        {children}
      </div>
      <div className={styles.cover} />
      <div className={styles.badge}>
        <Image
          src="/covalent.png"
          alt="covalent logo"
          width="19px"
          height="21.5px"
        />
        Powered By Covalent
      </div>
      <div className={styles.bg}>
        <Image
          src="/bg.svg"
          alt="background"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
