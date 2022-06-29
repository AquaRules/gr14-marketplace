import useAuth from '../AuthContext';
import { useCovalent } from '../../hooks/useCovalent';
import Image from 'next/image';
import { Attributes, Card } from '../Card';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useMetaMask } from 'metamask-react';
import config from '../../config.json';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const chainOptions = [
    { title: 'ethereum', url: '/eth.png', color: 'primary' },
    { title: 'polygon', url: '/matic.png', color: 'secondary' },
  ];
  const { user, loggedIn } = useAuth();
  const { getTokens, getTokenMetadata } = useCovalent();
  const { chainId } = useMetaMask();
  const [init, setInit] = useState(false);
  useEffect(() => {
    const run = async () => {
      const data = await getTokens(
        parseInt(chainId.toString(), 16),
        config[parseInt(chainId.toString(), 16).toString()]['NFT']
      );
      const items = data.data.items;
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const itemData = await getTokenMetadata(
          parseInt(chainId.toString(), 16).toString(),
          config[parseInt(chainId.toString(), 16).toString()]['NFT'],
          item.token_id
        );
        const token_url =
          itemData.data?.data?.items?.[0]?.nft_data?.[0]?.token_url;
        if (token_url) {
          setTokens((_tokens) => {
            const tokenData = JSON.parse(
              atob(token_url.split('data:application/json;base64,')[1])
            );
            _tokens.push({
              token_id: itemData.data?.data?.items?.[0]?.nft_data?.[0].token_id,
              name: tokenData?.['name'],
              image: tokenData?.['image'],
            });
            return _tokens;
          });
        }
      }
    };
    if (chainId && init === false) {
      run();
      setInit(true);
    }
  }, [getTokenMetadata, getTokens, chainId, init]);

  const [tokens, setTokens] = React.useState<
    {
      token_id: string;
      name: string;
      image: string;
    }[]
  >([]);

  const dummyCards: Attributes[] = [
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
