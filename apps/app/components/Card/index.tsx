import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

export const Card: React.FC<{attributes:any}> = ({attributes}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hanging} datatype="left">
        @{attributes.owner}
      </div>
      <div className={styles.hanging} datatype="right">
        {attributes.likes} likes
      </div>
      <Image unoptimized src={attributes.image_url} alt="NFT Image" layout='fill'/>
    </div>
  );
};
