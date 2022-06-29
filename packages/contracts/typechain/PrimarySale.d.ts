/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PrimarySaleInterface extends ethers.utils.Interface {
  functions: {
    "createSale((uint256,address,uint256,uint256,address))": FunctionFragment;
    "currencies(address)": FunctionFragment;
    "getCreatedSales(address)": FunctionFragment;
    "initialize(address,address[],uint256[])": FunctionFragment;
    "makeSale(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "purchase(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "saleMapping(uint256)": FunctionFragment;
    "setAdmin(address,bool)": FunctionFragment;
    "setCurrency(address,uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createSale",
    values: [
      {
        tokenId: BigNumberish;
        owner: string;
        price: BigNumberish;
        untill: BigNumberish;
        currency: string;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "currencies", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getCreatedSales",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "makeSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "saleMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrency",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "createSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "currencies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCreatedSales",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saleMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CreatePrimarySale(tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetAdmin(address,bool)": EventFragment;
    "SetCurrency(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatePrimarySale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetCurrency"): EventFragment;
}

export type CreatePrimarySaleEvent = TypedEvent<
  [
    [BigNumber, string, BigNumber, BigNumber, string] & {
      tokenId: BigNumber;
      owner: string;
      price: BigNumber;
      untill: BigNumber;
      currency: string;
    }
  ] & {
    c: [BigNumber, string, BigNumber, BigNumber, string] & {
      tokenId: BigNumber;
      owner: string;
      price: BigNumber;
      untill: BigNumber;
      currency: string;
    };
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SetAdminEvent = TypedEvent<
  [string, boolean] & { admin: string; enabled: boolean }
>;

export type SetCurrencyEvent = TypedEvent<
  [string, BigNumber] & { currency: string; price: BigNumber }
>;

export class PrimarySale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PrimarySaleInterface;

  functions: {
    createSale(
      _createdSale: {
        tokenId: BigNumberish;
        owner: string;
        price: BigNumberish;
        untill: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getCreatedSales(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    initialize(
      token_: string,
      _currencies: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeSale(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    purchase(
      currency: string,
      numberOfTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    saleMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        tokenId: BigNumber;
        owner: string;
        price: BigNumber;
        untill: BigNumber;
        currency: string;
      }
    >;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurrency(
      currency: string,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createSale(
    _createdSale: {
      tokenId: BigNumberish;
      owner: string;
      price: BigNumberish;
      untill: BigNumberish;
      currency: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getCreatedSales(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  initialize(
    token_: string,
    _currencies: string[],
    _prices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeSale(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  purchase(
    currency: string,
    numberOfTokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  saleMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, string] & {
      tokenId: BigNumber;
      owner: string;
      price: BigNumber;
      untill: BigNumber;
      currency: string;
    }
  >;

  setAdmin(
    admin: string,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurrency(
    currency: string,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createSale(
      _createdSale: {
        tokenId: BigNumberish;
        owner: string;
        price: BigNumberish;
        untill: BigNumberish;
        currency: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getCreatedSales(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    initialize(
      token_: string,
      _currencies: string[],
      _prices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    makeSale(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    purchase(
      currency: string,
      numberOfTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    saleMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        tokenId: BigNumber;
        owner: string;
        price: BigNumber;
        untill: BigNumber;
        currency: string;
      }
    >;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrency(
      currency: string,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreatePrimarySale(tuple)"(
      c?: null
    ): TypedEventFilter<
      [
        [BigNumber, string, BigNumber, BigNumber, string] & {
          tokenId: BigNumber;
          owner: string;
          price: BigNumber;
          untill: BigNumber;
          currency: string;
        }
      ],
      {
        c: [BigNumber, string, BigNumber, BigNumber, string] & {
          tokenId: BigNumber;
          owner: string;
          price: BigNumber;
          untill: BigNumber;
          currency: string;
        };
      }
    >;

    CreatePrimarySale(
      c?: null
    ): TypedEventFilter<
      [
        [BigNumber, string, BigNumber, BigNumber, string] & {
          tokenId: BigNumber;
          owner: string;
          price: BigNumber;
          untill: BigNumber;
          currency: string;
        }
      ],
      {
        c: [BigNumber, string, BigNumber, BigNumber, string] & {
          tokenId: BigNumber;
          owner: string;
          price: BigNumber;
          untill: BigNumber;
          currency: string;
        };
      }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SetAdmin(address,bool)"(
      admin?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { admin: string; enabled: boolean }>;

    SetAdmin(
      admin?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { admin: string; enabled: boolean }>;

    "SetCurrency(address,uint256)"(
      currency?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { currency: string; price: BigNumber }
    >;

    SetCurrency(
      currency?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { currency: string; price: BigNumber }
    >;
  };

  estimateGas: {
    createSale(
      _createdSale: {
        tokenId: BigNumberish;
        owner: string;
        price: BigNumberish;
        untill: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getCreatedSales(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      token_: string,
      _currencies: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeSale(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      currency: string,
      numberOfTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    saleMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurrency(
      currency: string,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createSale(
      _createdSale: {
        tokenId: BigNumberish;
        owner: string;
        price: BigNumberish;
        untill: BigNumberish;
        currency: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreatedSales(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      token_: string,
      _currencies: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeSale(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchase(
      currency: string,
      numberOfTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    saleMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurrency(
      currency: string,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
