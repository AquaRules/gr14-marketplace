/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrimarySale, PrimarySaleInterface } from "../PrimarySale";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "SetAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "SetCurrency",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    name: "currencies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "_currencies",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "purchase",
    outputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ec9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638de93222116100665780638de932221461010c578063a46194af1461013c578063f2fde38b14610158578063fc0c546a14610174578063ff1d57521461019257610093565b80634b0bddd2146100985780636036cba3146100b4578063715018a6146100e45780638da5cb5b146100ee575b600080fd5b6100b260048036038101906100ad9190611179565b6101ae565b005b6100ce60048036038101906100c991906111e6565b6102be565b6040516100db919061186a565b60405180910390f35b6100ec6102d6565b005b6100f661035e565b60405161010391906115ec565b60405180910390f35b61012660048036038101906101219190611213565b610388565b6040516101339190611667565b60405180910390f35b61015660048036038101906101519190611213565b610619565b005b610172600480360381019061016d919061114c565b61072d565b005b61017c610825565b60405161018991906116b2565b60405180910390f35b6101ac60048036038101906101a79190611253565b61084b565b005b6101b66109ff565b73ffffffffffffffffffffffffffffffffffffffff166101d461035e565b73ffffffffffffffffffffffffffffffffffffffff161461022a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102219061178a565b60405180910390fd5b80606560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f55a5194bc0174fcaf12b2978bef43911466bf63b34db8d1dd1a0d5dcd5c41bea82826040516102b292919061163e565b60405180910390a15050565b60986020528060005260406000206000915090505481565b6102de6109ff565b73ffffffffffffffffffffffffffffffffffffffff166102fc61035e565b73ffffffffffffffffffffffffffffffffffffffff1614610352576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103499061178a565b60405180910390fd5b61035c6000610a07565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600260665414156103d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c79061180a565b60405180910390fd5b60026066819055506000609860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561045b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104529061172a565b60405180910390fd5b6104ce6104666109ff565b30609860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548673ffffffffffffffffffffffffffffffffffffffff16610acd909392919063ffffffff16565b8167ffffffffffffffff8111156104e8576104e7611b4b565b5b6040519080825280602002602001820160405280156105165781602001602082028036833780820191505090505b50905060005b8281101561060a57609960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636a62784261056a6109ff565b6040518263ffffffff1660e01b815260040161058691906115ec565b602060405180830381600087803b1580156105a057600080fd5b505af11580156105b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d891906112de565b8282815181106105eb576105ea611b1c565b5b602002602001018181525050808061060290611aa4565b91505061051c565b50600160668190555092915050565b606560006106256109ff565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166106ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a39061182a565b60405180910390fd5b80609860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fd76cbd7d1007b39f0b4176db391f50665caf39f806b914173746a6881772d4f28282604051610721929190611689565b60405180910390a15050565b6107356109ff565b73ffffffffffffffffffffffffffffffffffffffff1661075361035e565b73ffffffffffffffffffffffffffffffffffffffff16146107a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a09061178a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610819576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108109061170a565b60405180910390fd5b61082281610a07565b50565b609960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006108576001610b56565b9050801561087b576001600060016101000a81548160ff0219169083151502179055505b83609960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108c4610c46565b8151835114610908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ff9061184a565b60405180910390fd5b60005b835181101561099f5782818151811061092757610926611b1c565b5b60200260200101516098600086848151811061094657610945611b1c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061099790611aa4565b91505061090b565b5080156109f95760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516109f091906116cd565b60405180910390a15b50505050565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610b50846323b872dd60e01b858585604051602401610aee93929190611607565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c9f565b50505050565b60008060019054906101000a900460ff1615610bcd5760018260ff16148015610b855750610b8330610d66565b155b610bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbb9061176a565b60405180910390fd5b60009050610c41565b8160ff1660008054906101000a900460ff1660ff1610610c22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c199061176a565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff16610c95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8c906117ca565b60405180910390fd5b610c9d610d89565b565b6000610d01826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610dea9092919063ffffffff16565b9050600081511115610d615780806020019051810190610d2191906111b9565b610d60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d57906117ea565b60405180910390fd5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16610dd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcf906117ca565b60405180910390fd5b610de8610de36109ff565b610a07565b565b6060610df98484600085610e02565b90509392505050565b606082471015610e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3e9061174a565b60405180910390fd5b610e5085610d66565b610e8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e86906117aa565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610eb891906115d5565b60006040518083038185875af1925050503d8060008114610ef5576040519150601f19603f3d011682016040523d82523d6000602084013e610efa565b606091505b5091509150610f0a828286610f16565b92505050949350505050565b60608315610f2657829050610f76565b600083511115610f395782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6d91906116e8565b60405180910390fd5b9392505050565b6000610f90610f8b846118aa565b611885565b90508083825260208201905082856020860282011115610fb357610fb2611b7f565b5b60005b85811015610fe35781610fc988826110f8565b845260208401935060208301925050600181019050610fb6565b5050509392505050565b6000611000610ffb846118d6565b611885565b9050808382526020820190508285602086028201111561102357611022611b7f565b5b60005b8581101561105357816110398882611122565b845260208401935060208301925050600181019050611026565b5050509392505050565b60008135905061106c81611e20565b92915050565b600082601f83011261108757611086611b7a565b5b8135611097848260208601610f7d565b91505092915050565b600082601f8301126110b5576110b4611b7a565b5b81356110c5848260208601610fed565b91505092915050565b6000813590506110dd81611e37565b92915050565b6000815190506110f281611e37565b92915050565b60008135905061110781611e4e565b92915050565b60008135905061111c81611e65565b92915050565b60008135905061113181611e7c565b92915050565b60008151905061114681611e7c565b92915050565b60006020828403121561116257611161611b89565b5b60006111708482850161105d565b91505092915050565b600080604083850312156111905761118f611b89565b5b600061119e8582860161105d565b92505060206111af858286016110ce565b9150509250929050565b6000602082840312156111cf576111ce611b89565b5b60006111dd848285016110e3565b91505092915050565b6000602082840312156111fc576111fb611b89565b5b600061120a848285016110f8565b91505092915050565b6000806040838503121561122a57611229611b89565b5b6000611238858286016110f8565b925050602061124985828601611122565b9150509250929050565b60008060006060848603121561126c5761126b611b89565b5b600061127a8682870161110d565b935050602084013567ffffffffffffffff81111561129b5761129a611b84565b5b6112a786828701611072565b925050604084013567ffffffffffffffff8111156112c8576112c7611b84565b5b6112d4868287016110a0565b9150509250925092565b6000602082840312156112f4576112f3611b89565b5b600061130284828501611137565b91505092915050565b600061131783836115b7565b60208301905092915050565b61132c8161196d565b82525050565b600061133d82611912565b6113478185611940565b935061135283611902565b8060005b8381101561138357815161136a888261130b565b975061137583611933565b925050600181019050611356565b5085935050505092915050565b6113998161197f565b82525050565b60006113aa8261191d565b6113b48185611951565b93506113c4818560208601611a40565b80840191505092915050565b6113d9816119e6565b82525050565b6113e881611a0a565b82525050565b6113f781611a2e565b82525050565b600061140882611928565b611412818561195c565b9350611422818560208601611a40565b61142b81611b8e565b840191505092915050565b600061144360268361195c565b915061144e82611b9f565b604082019050919050565b600061146660108361195c565b915061147182611bee565b602082019050919050565b600061148960268361195c565b915061149482611c17565b604082019050919050565b60006114ac602e8361195c565b91506114b782611c66565b604082019050919050565b60006114cf60208361195c565b91506114da82611cb5565b602082019050919050565b60006114f2601d8361195c565b91506114fd82611cde565b602082019050919050565b6000611515602b8361195c565b915061152082611d07565b604082019050919050565b6000611538602a8361195c565b915061154382611d56565b604082019050919050565b600061155b601f8361195c565b915061156682611da5565b602082019050919050565b600061157e60098361195c565b915061158982611dce565b602082019050919050565b60006115a160068361195c565b91506115ac82611df7565b602082019050919050565b6115c0816119cf565b82525050565b6115cf816119cf565b82525050565b60006115e1828461139f565b915081905092915050565b60006020820190506116016000830184611323565b92915050565b600060608201905061161c6000830186611323565b6116296020830185611323565b61163660408301846115c6565b949350505050565b60006040820190506116536000830185611323565b6116606020830184611390565b9392505050565b600060208201905081810360008301526116818184611332565b905092915050565b600060408201905061169e60008301856113d0565b6116ab60208301846115c6565b9392505050565b60006020820190506116c760008301846113df565b92915050565b60006020820190506116e260008301846113ee565b92915050565b6000602082019050818103600083015261170281846113fd565b905092915050565b6000602082019050818103600083015261172381611436565b9050919050565b6000602082019050818103600083015261174381611459565b9050919050565b600060208201905081810360008301526117638161147c565b9050919050565b600060208201905081810360008301526117838161149f565b9050919050565b600060208201905081810360008301526117a3816114c2565b9050919050565b600060208201905081810360008301526117c3816114e5565b9050919050565b600060208201905081810360008301526117e381611508565b9050919050565b600060208201905081810360008301526118038161152b565b9050919050565b600060208201905081810360008301526118238161154e565b9050919050565b6000602082019050818103600083015261184381611571565b9050919050565b6000602082019050818103600083015261186381611594565b9050919050565b600060208201905061187f60008301846115c6565b92915050565b600061188f6118a0565b905061189b8282611a73565b919050565b6000604051905090565b600067ffffffffffffffff8211156118c5576118c4611b4b565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156118f1576118f0611b4b565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611978826119af565b9050919050565b60008115159050919050565b60006119968261196d565b9050919050565b60006119a88261196d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006119f1826119f8565b9050919050565b6000611a03826119af565b9050919050565b6000611a1582611a1c565b9050919050565b6000611a27826119af565b9050919050565b6000611a39826119d9565b9050919050565b60005b83811015611a5e578082015181840152602081019050611a43565b83811115611a6d576000848401525b50505050565b611a7c82611b8e565b810181811067ffffffffffffffff82111715611a9b57611a9a611b4b565b5b80604052505050565b6000611aaf826119cf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ae257611ae1611aed565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c69642063757272656e637900000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f4e6f742061646d696e0000000000000000000000000000000000000000000000600082015250565b7f4c656e6774680000000000000000000000000000000000000000000000000000600082015250565b611e298161196d565b8114611e3457600080fd5b50565b611e408161197f565b8114611e4b57600080fd5b50565b611e578161198b565b8114611e6257600080fd5b50565b611e6e8161199d565b8114611e7957600080fd5b50565b611e85816119cf565b8114611e9057600080fd5b5056fea26469706673582212203f5deb80d0e58ad8aa67605290017f3ba5475df0943a98f51df591639f1165f064736f6c63430008060033";

export class PrimarySale__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PrimarySale> {
    return super.deploy(overrides || {}) as Promise<PrimarySale>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PrimarySale {
    return super.attach(address) as PrimarySale;
  }
  connect(signer: Signer): PrimarySale__factory {
    return super.connect(signer) as PrimarySale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrimarySaleInterface {
    return new utils.Interface(_abi) as PrimarySaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrimarySale {
    return new Contract(address, _abi, signerOrProvider) as PrimarySale;
  }
}