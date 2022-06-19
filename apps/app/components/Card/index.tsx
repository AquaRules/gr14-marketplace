import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

export const Card: React.FC<{ attributes: any }> = ({ attributes }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <Image
            unoptimized
            src={attributes.image_url}
            alt="NFT Image"
            layout="fill"
            objectFit='cover'
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
            <li>
              <div>LEASE</div>
              <div>
                {attributes.lend.amount} {attributes.price.chainName} / WEEK
              </div>
            </li>
          </ul>
          <h1>Author</h1>
          <ul>
            <li>
              <div>NAME</div>
              <div>{attributes.owner}</div>
            </li>
            <li>
              <div>AGE</div>
              <div>{new Date(attributes.created).getHours()} Hours Ago</div>
            </li>
            <li>
              <div>LIKES</div>
              <div>{attributes.likes}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.hanging} datatype="left">
        @{attributes.owner}
      </div>
      <div className={styles.hanging} datatype="right">
        {attributes.likes} likes
      </div>
    </div>
  );
};
