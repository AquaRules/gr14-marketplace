/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INFT, INFTInterface } from "../INFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class INFT__factory {
  static readonly abi = _abi;
  static createInterface(): INFTInterface {
    return new utils.Interface(_abi) as INFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): INFT {
    return new Contract(address, _abi, signerOrProvider) as INFT;
  }
}
