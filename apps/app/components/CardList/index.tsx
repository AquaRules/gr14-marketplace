import Image from 'next/image';
import React from 'react';
import { Card } from '../Card';
import styles from './index.module.scss';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const chainOptions = [
    { title: 'ethereum', url: '/eth.png', color: 'primary' },
    { title: 'polygon', url: '/matic.png', color: 'secondary' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        {chainOptions.map((v, i) => {
          return (
            <div
              key={i}
              datatype={i == chainSelect ? 'active ' + v.color : v.color}
              className={styles.button}
              onClick={() => setChainSelect(i)}
            >
              <div className={styles.image}>
                <Image
                  src={v.url}
                  alt={v.title}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              {v.title}
            </div>
          );
        })}
      </div>
      <div className={styles.cardWrapper}>
        {Array(16)
          .fill(0)
          .map((i) => {
            return <Card key={i} />;
          })}
      </div>
    </div>
  );
};
