import { useCovalent } from '../../hooks/useCovalent';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Card } from '../Card';
import styles from './index.module.scss';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const chainOptions = [
    { title: 'ethereum', url: '/eth.png', color: 'primary' },
    { title: 'polygon', url: '/matic.png', color: 'secondary' },
  ];
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
  }, [getTokens]);

  const dummyCards = [
    {
      title: 'Card#1',
      owner: 'abhinavr',
      created: Date.now() - 100 * 60 * 60 * 24,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2, chainName: 'ETH' },
      lend: { enabled: true, amount: 0.1 },
      image_url:
        'https://64.media.tumblr.com/780e42f226309d1998293cee15814051/tumblr_mubkq9dZhh1rmfvsio1_400.gif',
    },
    {
      title: 'Card#1',
      owner: 'abhinavr',
      created: Date.now() - 100 * 60 * 60 * 24,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2, chainName: 'ETH' },
      lend: { enabled: true, amount: 0.1 },
      image_url: 'https://media2.giphy.com/media/G3lxvBMhGu53y/giphy.gif',
    },
    {
      title: 'Card#1',
      owner: 'abhinavr',
      created: Date.now() - 100 * 60 * 60 * 24,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2, chainName: 'ETH' },
      lend: { enabled: true, amount: 0.1 },
      image_url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F4GDliBrmcmuFa%2Fgiphy.gif&f=1&nofb=1',
    },
    {
      title: 'Card#1',
      owner: 'abhinavr',
      created: Date.now() - 100 * 60 * 60 * 24,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2, chainName: 'ETH' },
      lend: { enabled: true, amount: 0.1 },
      image_url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F8832ed90df55d2f8a1aae2ff3e183c00%2Ftenor.gif%3Fitemid%3D9254331&f=1&nofb=1',
    },
    {
      title: 'Card#1',
      owner: 'abhinavr',
      created: Date.now() - 100 * 60 * 60 * 24,
      type: 'Comedy',
      id: '1',
      price: { chain: 1, amount: 2, chainName: 'ETH' },
      lend: { enabled: true, amount: 0.1 },
      image_url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lBsU-sg7q1Uxn9r9gtNrwgHaHW%26pid%3DApi&f=1',
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
        {dummyCards.map((v, i) => {
          return <Card key={i} attributes={v} />;
        })}
      </div>
    </div>
  );
};
