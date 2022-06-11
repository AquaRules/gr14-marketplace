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
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
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
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
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
        name: "admin_",
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
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
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
  "0x608060405260405162001a7d38038062001a7d83398181016040528101906200002991906200069a565b828160017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6200005d919062000974565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b1462000095576200009462000a59565b5b620000a9828260006200012f60201b60201c565b505060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c620000dd919062000974565b60001b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b1462000115576200011462000a59565b5b62000126826200017260201b60201c565b50505062000c12565b6200014083620001d060201b60201c565b6000825111806200014e5750805b156200016d576200016b83836200022760201b6200034f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620001a36200025d60201b60201c565b82604051620001b49291906200082c565b60405180910390a1620001cd81620002c160201b60201c565b50565b620001e181620003b260201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606062000255838360405180606001604052806027815260200162001a56602791396200048860201b60201c565b905092915050565b6000620002987fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200056c60201b6200037c1760201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200032b906200087d565b60405180910390fd5b806200036e7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200056c60201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620003c8816200057660201b620003861760201c565b6200040a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000401906200089f565b60405180910390fd5b80620004447f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200056c60201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606200049b846200057660201b60201c565b620004dd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004d490620008c1565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405162000507919062000813565b600060405180830381855af49150503d806000811462000544576040519150601f19603f3d011682016040523d82523d6000602084013e62000549565b606091505b5091509150620005618282866200059960201b60201c565b925050509392505050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315620005ab57829050620005fe565b600083511115620005bf5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005f5919062000859565b60405180910390fd5b9392505050565b60006200061c62000616846200090c565b620008e3565b9050828152602081018484840111156200063b576200063a62000aeb565b5b62000648848285620009ed565b509392505050565b600081519050620006618162000bf8565b92915050565b600082601f8301126200067f576200067e62000ae6565b5b81516200069184826020860162000605565b91505092915050565b600080600060608486031215620006b657620006b562000af5565b5b6000620006c68682870162000650565b9350506020620006d98682870162000650565b925050604084015167ffffffffffffffff811115620006fd57620006fc62000af0565b5b6200070b8682870162000667565b9150509250925092565b6200072081620009af565b82525050565b6000620007338262000942565b6200073f818562000958565b935062000751818560208601620009ed565b80840191505092915050565b60006200076a826200094d565b62000776818562000963565b935062000788818560208601620009ed565b620007938162000afa565b840191505092915050565b6000620007ad60268362000963565b9150620007ba8262000b0b565b604082019050919050565b6000620007d4602d8362000963565b9150620007e18262000b5a565b604082019050919050565b6000620007fb60268362000963565b9150620008088262000ba9565b604082019050919050565b600062000821828462000726565b915081905092915050565b600060408201905062000843600083018562000715565b62000852602083018462000715565b9392505050565b600060208201905081810360008301526200087581846200075d565b905092915050565b6000602082019050818103600083015262000898816200079e565b9050919050565b60006020820190508181036000830152620008ba81620007c5565b9050919050565b60006020820190508181036000830152620008dc81620007ec565b9050919050565b6000620008ef62000902565b9050620008fd828262000a23565b919050565b6000604051905090565b600067ffffffffffffffff8211156200092a576200092962000ab7565b5b620009358262000afa565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006200098182620009e3565b91506200098e83620009e3565b925082821015620009a457620009a362000a88565b5b828203905092915050565b6000620009bc82620009c3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101562000a0d578082015181840152602081019050620009f0565b8381111562000a1d576000848401525b50505050565b62000a2e8262000afa565b810181811067ffffffffffffffff8211171562000a505762000a4f62000ab7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b62000c0381620009af565b811462000c0f57600080fd5b50565b610e348062000c226000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100675780634f1ef286146100905780635c60da1b146100ac5780638f283970146100d7578063f851a440146101005761005d565b3661005d5761005b61012b565b005b61006561012b565b005b34801561007357600080fd5b5061008e6004803603810190610089919061090e565b610145565b005b6100aa60048036038101906100a5919061093b565b6101ac565b005b3480156100b857600080fd5b506100c161024a565b6040516100ce9190610ab7565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f9919061090e565b6102a2565b005b34801561010c57600080fd5b506101156102f7565b6040516101229190610ab7565b60405180910390f35b6101336103a9565b61014361013e610429565b610438565b565b61014d61045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a05761019b816040518060200160405280600081525060006104b5565b6101a9565b6101a861012b565b5b50565b6101b461045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023c576102378383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505060016104b5565b610245565b61024461012b565b5b505050565b600061025461045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102965761028f610429565b905061029f565b61029e61012b565b5b90565b6102aa61045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102eb576102e6816104e1565b6102f4565b6102f361012b565b5b50565b600061030161045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156103435761033c61045e565b905061034c565b61034b61012b565b5b90565b60606103748383604051806060016040528060278152602001610dd86027913961052d565b905092915050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6103b161045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561041f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041690610b7d565b60405180910390fd5b6104276105fa565b565b60006104336105fc565b905090565b3660008037600080366000845af43d6000803e8060008114610459573d6000f35b3d6000fd5b600061048c7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104be83610653565b6000825111806104cb5750805b156104dc576104da838361034f565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61050a61045e565b82604051610519929190610ad2565b60405180910390a161052a816106a2565b50565b606061053884610386565b610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056e90610b5d565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161059f9190610aa0565b600060405180830381855af49150503d80600081146105da576040519150601f19603f3d011682016040523d82523d6000602084013e6105df565b606091505b50915091506105ef828286610783565b925050509392505050565b565b600061062a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61065c816107ea565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070990610b1d565b60405180910390fd5b8061073f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60608315610793578290506107e3565b6000835111156107a65782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da9190610afb565b60405180910390fd5b9392505050565b6107f381610386565b610832576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082990610b3d565b60405180910390fd5b8061085f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506108b281610dc0565b92915050565b60008083601f8401126108ce576108cd610c39565b5b8235905067ffffffffffffffff8111156108eb576108ea610c34565b5b60208301915083600182028301111561090757610906610c3e565b5b9250929050565b60006020828403121561092457610923610c48565b5b6000610932848285016108a3565b91505092915050565b60008060006040848603121561095457610953610c48565b5b6000610962868287016108a3565b935050602084013567ffffffffffffffff81111561098357610982610c43565b5b61098f868287016108b8565b92509250509250925092565b6109a481610bcf565b82525050565b60006109b582610b9d565b6109bf8185610bb3565b93506109cf818560208601610c01565b80840191505092915050565b60006109e682610ba8565b6109f08185610bbe565b9350610a00818560208601610c01565b610a0981610c4d565b840191505092915050565b6000610a21602683610bbe565b9150610a2c82610c5e565b604082019050919050565b6000610a44602d83610bbe565b9150610a4f82610cad565b604082019050919050565b6000610a67602683610bbe565b9150610a7282610cfc565b604082019050919050565b6000610a8a604283610bbe565b9150610a9582610d4b565b606082019050919050565b6000610aac82846109aa565b915081905092915050565b6000602082019050610acc600083018461099b565b92915050565b6000604082019050610ae7600083018561099b565b610af4602083018461099b565b9392505050565b60006020820190508181036000830152610b1581846109db565b905092915050565b60006020820190508181036000830152610b3681610a14565b9050919050565b60006020820190508181036000830152610b5681610a37565b9050919050565b60006020820190508181036000830152610b7681610a5a565b9050919050565b60006020820190508181036000830152610b9681610a7d565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610bda82610be1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015610c1f578082015181840152602081019050610c04565b83811115610c2e576000848401525b50505050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208201527f6574000000000000000000000000000000000000000000000000000000000000604082015250565b610dc981610bcf565b8114610dd457600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122080c8678463854f1071f8fe7db88800d9af44fbdcdf0448a95a013f0e74551d7164736f6c63430008060033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class TransparentUpgradeableProxy__factory extends ContractFactory {
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
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
