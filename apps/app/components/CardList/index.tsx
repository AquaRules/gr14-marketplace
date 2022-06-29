import useAuth from '../AuthContext';
import { useCovalent } from '../../hooks/useCovalent';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Attributes, Card } from '../Card';
import styles from './index.module.scss';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const chainOptions = [
    { title: 'ethereum', url: '/eth.png', color: 'primary' },
    { title: 'polygon', url: '/matic.png', color: 'secondary' },
  ];
  const { user, loggedIn } = useAuth();
  const { getTokens, getTokenMetadata } = useCovalent();

  useEffect(() => {
    const run = async () => {
      const data = await getTokens(
        42,
        '0x4fdc608B984dF53f9877ee1803327703e69F44E0'
      );
      const items = data.data.items;
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const itemData = await getTokenMetadata(
          '42',
          '0x4fdc608B984dF53f9877ee1803327703e69F44E0',
          item.token_id
        );
        console.log(itemData.data);
      }
    };

    run();
  }, [getTokenMetadata, getTokens]);

  const dummyCards:Attributes[] = [
    {
      title: 'Card#1',
      owner: 'abhinavr',
      type: 'Comedy',
      id: 1,
      price: { chainId: 1, amount: 5.2, chainName: 'ETH' },
      image_url:
        'https://64.media.tumblr.com/780e42f226309d1998293cee15814051/tumblr_mubkq9dZhh1rmfvsio1_400.gif',
    },
    {
      title: 'Card#1',
      owner: 'abhinavr',
      type: 'Comedy',
      id: 2,
      price: { chainId: 1, amount: 2, chainName: 'ETH' },
      image_url: 'https://media2.giphy.com/media/G3lxvBMhGu53y/giphy.gif',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
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
        {loggedIn ? (
          <div className={styles.select}>
            <div className={styles.button}>{user.name}</div>
            <div className={styles.button} datatype="active secondary">
              {user.address.substring(0, 8)}...
            </div>
          </div>
        ) : (
          <div className={styles.select}>
            <div className={styles.button} style={{ width: '100%' }}>
              Not logged into metamask
            </div>
          </div>
        )}
      </div>
      <div className={styles.cardWrapper}>
        {dummyCards.map((v, i) => {
          return <Card key={i} attributes={v} />;
        })}
      </div>
    </div>
  );
};
