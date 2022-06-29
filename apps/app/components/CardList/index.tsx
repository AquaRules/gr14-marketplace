import useAuth from '../AuthContext';
import { useCovalent } from '../../hooks/useCovalent';
import Image from 'next/image';
import { Attributes, Card } from '../Card';
import React from 'react';
import styles from './index.module.scss';
import { useMetaMask } from 'metamask-react';
import config from '../../config.json';
import { useContracts } from '../../contracts';
import { ethers } from 'ethers';

export const CardList: React.FC = () => {
  const [chainSelect, setChainSelect] = React.useState<number>(0);
  const [tokens, setTokens] = React.useState<Attributes[]>([]);
  const chainOptions = [
    { title: 'ethereum', url: '/eth.png', color: 'primary' },
    { title: 'polygon', url: '/matic.png', color: 'secondary' },
  ];
  const [init, setInit] = React.useState(0);

  const { user, loggedIn } = useAuth();
  const { getTokens, getTokenMetadata } = useCovalent();
  const { chainId, connect } = useMetaMask();
  const { getSale, getNFT } = useContracts();

  const getItems = React.useCallback(() => {
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
        const Sale = await getSale();
        const token_url =
          itemData.data?.data?.items?.[0]?.nft_data?.[0]?.token_url;
        const tokenId = itemData.data?.data?.items?.[0]?.nft_data?.[0].token_id;
        if (token_url && tokenId) {
          const amount = ethers.utils.formatEther(
            (await Sale.saleMapping(tokenId)).price
          );
          const owner = await (await getNFT()).ownerOf(tokenId);
          const user = (
            await (
              await fetch('/api/user/' + owner.toLowerCase(), {
                method: 'GET',
              })
            ).json()
          )?.['message'];
          console.log('FETCHED USER');
          setTokens((_tokens) => {
            const tokenData = JSON.parse(
              atob(token_url.split('data:application/json;base64,')[1])
            );
            const dataVal = {
              id: tokenId,
              title: tokenData?.['name'],
              image_url: tokenData?.['image'],
              owner: user,
              price: {
                amount: amount,
                chainName: 'USDT',
                chainId: 'number',
              },
            };
            _tokens.push(dataVal);
            return _tokens;
          });
          setInit((init) => init + 1);
        }
      }
    };
    if (init === 0) {
      run();
      setInit((init) => init + 1);
    }
  }, [getTokenMetadata, getTokens, init, getSale, getNFT, chainId, setTokens]);

  React.useEffect(() => {
    connect();
  }, [connect]);

  React.useEffect(() => {
    if (loggedIn) getItems();
  }, [loggedIn]);
  console.log({ tokens });
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
        {init !== 0 &&
          tokens.map((v, i) => {
            return <Card key={i} attributes={v} />;
          })}
      </div>
    </div>
  );
};
