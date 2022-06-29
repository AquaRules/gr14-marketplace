import { ethers } from 'ethers';

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
