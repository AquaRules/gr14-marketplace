/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OptimizedTransparentUpgradeableProxy,
  OptimizedTransparentUpgradeableProxyInterface,
} from "../OptimizedTransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialLogic",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialAdmin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040526040516108fc3803806108fc8339818101604052606081101561002657600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005157600080fd5b90830190602082018581111561006657600080fd5b825164010000000081118282018810171561008057600080fd5b82525081516020918201929091019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b50604052508491508290506100ee826101e9565b8051156101a6576000826001600160a01b0316826040518082805190602001908083835b602083106101315780518252601f199092019160209182019101610112565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610191576040519150601f19603f3d011682016040523d82523d6000602084013e610196565b606091505b50509050806101a457600080fd5b505b506101ae9050565b506001600160601b0319606082901b166080527fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035550610297565b6101fc8161025b60201b6103581760201c565b6102375760405162461bcd60e51b81526004018080602001828103825260368152602001806108c66036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061028f57508115155b949350505050565b60805160601c6106126102b46000398061047352506106126000f3fe6080604052600436106100435760003560e01c80633659cfe61461005a5780634f1ef2861461009a5780635c60da1b14610127578063f851a4401461016557610052565b366100525761005061017a565b005b61005061017a565b34801561006657600080fd5b506100506004803603602081101561007d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610194565b610050600480360360408110156100b057600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156100e857600080fd5b8201836020820111156100fa57600080fd5b8035906020019184600183028401116401000000008311171561011c57600080fd5b5090925090506101e8565b34801561013357600080fd5b5061013c6102bc565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561017157600080fd5b5061013c610313565b610182610394565b61019261018d610428565b61044d565b565b61019c610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101dd576101d881610495565b6101e5565b6101e561017a565b50565b6101f0610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102af5761022c83610495565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610296576040519150601f19603f3d011682016040523d82523d6000602084013e61029b565b606091505b50509050806102a957600080fd5b506102b7565b6102b761017a565b505050565b60006102c6610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561030857610301610428565b9050610310565b61031061017a565b90565b600061031d610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561030857610301610471565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061038c57508115155b949350505050565b61039c610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604281526020018061059b6042913960600191505060405180910390fd5b610192610192565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561046c573d6000f35b3d6000fd5b7f000000000000000000000000000000000000000000000000000000000000000090565b61049e816104e2565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6104eb81610358565b610540576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806105656036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5556fe5570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e74726163745472616e73706172656e745570677261646561626c6550726f78793a2061646d696e2063616e6e6f742066616c6c6261636b20746f2070726f787920746172676574a2646970667358221220c81e1dda0b901a6af96f5c59824558cadac0a471b5e3130018e153003106026064736f6c634300070600335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";

export class OptimizedTransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    initialLogic: string,
    initialAdmin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<OptimizedTransparentUpgradeableProxy> {
    return super.deploy(
      initialLogic,
      initialAdmin,
      _data,
      overrides || {}
    ) as Promise<OptimizedTransparentUpgradeableProxy>;
  }
  getDeployTransaction(
    initialLogic: string,
    initialAdmin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialLogic,
      initialAdmin,
      _data,
      overrides || {}
    );
  }
  attach(address: string): OptimizedTransparentUpgradeableProxy {
    return super.attach(address) as OptimizedTransparentUpgradeableProxy;
  }
  connect(signer: Signer): OptimizedTransparentUpgradeableProxy__factory {
    return super.connect(
      signer
    ) as OptimizedTransparentUpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimizedTransparentUpgradeableProxyInterface {
    return new utils.Interface(
      _abi
    ) as OptimizedTransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimizedTransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OptimizedTransparentUpgradeableProxy;
  }
}
