import { ethers } from 'ethers';
import { useMetaMask } from 'metamask-react';
import config from '../config.json';
import { NFT, Sale, TestERC20 } from '../types';

export const getContractABI = async (contractName: string) => {
  return Array.from<any>((await import(`./${contractName}.json`)) as any);
};

export const getContract = async (
  contractAddress: string,
  abi: Array<any>,
  provider: ethers.providers.JsonRpcProvider
) => {
  return new ethers.Contract(contractAddress, abi, provider);
};

export const useContracts = () => {
  const { ethereum, chainId, account } = useMetaMask();

  const getEthers = async () => {
    return new ethers.providers.Web3Provider(ethereum, 'any').getSigner();
  };
  const chain = () => parseInt(chainId.toString(), 16).toString();

  const getSale = async () => {
    console.log({ config });
    return new ethers.Contract(
      config[chain()]['Sale'],
      await getContractABI('Sale'),
      await getEthers()
    ) as Sale;
  };

  const getNFT = async () => {
    return new ethers.Contract(
      config[chain()]['NFT'],
      await getContractABI('NFT'),
      await getEthers()
    ) as NFT;
  };

  const getTestERC20 = async () => {
    return new ethers.Contract(
      config[chain()]['TestERC20'],
      await getContractABI('TestERC20'),
      await getEthers()
    ) as TestERC20;
  };

  return { account, getSale, getNFT, getTestERC20 };
};
