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

  const dummyCards = [
    {
      title: 'Card#1',
      owner: 'abhinavr',
      minted: Date.now() - 100 * 60 * 60 * 24,
      likes: 1243,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2 },
      lend: { enabled: true, amount: 0.1 },
      image_url: "https://64.media.tumblr.com/780e42f226309d1998293cee15814051/tumblr_mubkq9dZhh1rmfvsio1_400.gif"
    },
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
        {dummyCards
          .map((v,i) => {
            return <Card key={i} attributes={v}/>;
          })}
      </div>
    </div>
  );
};
