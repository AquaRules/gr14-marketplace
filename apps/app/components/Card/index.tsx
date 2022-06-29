import { useContracts } from 'apps/app/contracts';
import { ethers } from 'ethers';
import Image from 'next/image';
import React from 'react';
import useAuth from '../AuthContext';
import styles from './index.module.scss';

export type Attributes = {
  title: string;
  image_url: string;
  type?: string;
  id: string;
  price?: {
    amount: string;
    chainName: string;
    chainId: string;
  };
  owner: string;
};

export const Card: React.FC<{ attributes: Attributes }> = ({ attributes }) => {
  const { user } = useAuth();
  const { getSale, getTestERC20 } = useContracts();
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
          {attributes.owner != user.name && (
            <button
              onClick={async () => {
                const Sale = await getSale();
                const ERC20 = await getTestERC20();
                (
                  await ERC20.approve(Sale.address, ethers.constants.MaxUint256)
                ).wait();

                (await Sale.makeSale(attributes.id)).wait();
              }}
            >
              Buy
            </button>
          )}
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
