import React from 'react';
import { Card } from '../Card';
import styles from './index.module.scss';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const chainOptions = [{ title: 'ethereum' }, { title: 'polygon' }];

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        {chainOptions.map((v, i) => {
          return (
            <div
              key={i}
              datatype={i == chainSelect ? 'active' : ''}
              className={styles.button}
              onClick={() => setChainSelect(i)}
            >
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
