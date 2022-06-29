import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

export type Attributes = {
  title: string;
  image_url: string;
  type: string;
  id: number;
  price: {
    amount: number;
    chainName: string;
    chainId: number;
  };
  owner: string;
};

export const Card: React.FC<{ attributes: Attributes }> = ({ attributes }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <Image
            unoptimized
            src={attributes.image_url}
            alt="NFT Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.back}>
          <h1>About</h1>
          <ul>
            <li>
              <div>TYPE</div>
              <div>{attributes.type}</div>
            </li>
            <li>
              <div>ID</div>
              <div>{attributes.id}</div>
            </li>
            <li>
              <div>VALUE</div>
              <div>
                {attributes.price.amount} {attributes.price.chainName}
              </div>
            </li>
          </ul>
          <h1>Author</h1>
          <ul>
            <li>
              <div>NAME</div>
              <div>{attributes.owner}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.hanging} datatype="left">
        @{attributes.owner}
      </div>
      <div className={styles.hanging} datatype="right">
        {attributes.price.amount} {attributes.price.chainName}
      </div>
    </div>
  );
};
