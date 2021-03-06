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

interface LendInterface extends ethers.utils.Interface {
  functions: {
    "admins(address)": FunctionFragment;
    "allowedToken(address)": FunctionFragment;
    "currency()": FunctionFragment;
    "decimals()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "mortgage(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "payback(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdmin(address,bool)": FunctionFragment;
    "setAllowedToken(address,bool)": FunctionFragment;
    "setTokenData(address,(uint256,uint256,uint256))": FunctionFragment;
    "tokenData(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "allowedToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "currency", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mortgage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payback",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedToken",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenData",
    values: [
      string,
      { price: BigNumberish; duration: BigNumberish; roi: BigNumberish }
    ]
  ): string;
  encodeFunctionData(functionFragment: "tokenData", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currency", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mortgage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payback", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Mortgage(address,uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Payback(address,uint256,uint256,address)": EventFragment;
    "SetAdmin(address,bool)": EventFragment;
    "SetAllowedToken(address,bool)": EventFragment;
    "SetTokenData(address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mortgage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAllowedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTokenData"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type MortgageEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    _token: string;
    tokenId: BigNumber;
    principal: BigNumber;
    user: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PaybackEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    _token: string;
    tokenId: BigNumber;
    amount: BigNumber;
    user: string;
  }
>;

export type SetAdminEvent = TypedEvent<
  [string, boolean] & { admin: string; enabled: boolean }
>;

export type SetAllowedTokenEvent = TypedEvent<
  [string, boolean] & { _token: string; enabled: boolean }
>;

export type SetTokenDataEvent = TypedEvent<
  [
    string,
    [BigNumber, BigNumber, BigNumber] & {
      price: BigNumber;
      duration: BigNumber;
      roi: BigNumber;
    }
  ] & {
    _token: string;
    price: [BigNumber, BigNumber, BigNumber] & {
      price: BigNumber;
      duration: BigNumber;
      roi: BigNumber;
    };
  }
>;

export class Lend extends BaseContract {
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

  interface: LendInterface;

  functions: {
    admins(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    allowedToken(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    currency(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mortgage(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payback(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowedToken(
      _token: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenData(
      _token: string,
      _tokenData: {
        price: BigNumberish;
        duration: BigNumberish;
        roi: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        price: BigNumber;
        duration: BigNumber;
        roi: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  allowedToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  currency(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mortgage(
    _token: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  payback(
    _token: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    admin: string,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowedToken(
    _token: string,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenData(
    _token: string,
    _tokenData: {
      price: BigNumberish;
      duration: BigNumberish;
      roi: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenData(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      price: BigNumber;
      duration: BigNumber;
      roi: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    allowedToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    currency(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_currency: string, overrides?: CallOverrides): Promise<void>;

    mortgage(
      _token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    payback(
      _token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setAllowedToken(
      _token: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenData(
      _token: string,
      _tokenData: {
        price: BigNumberish;
        duration: BigNumberish;
        roi: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    tokenData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        price: BigNumber;
        duration: BigNumber;
        roi: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Mortgage(address,uint256,uint256,address)"(
      _token?: null,
      tokenId?: null,
      principal?: null,
      user?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { _token: string; tokenId: BigNumber; principal: BigNumber; user: string }
    >;

    Mortgage(
      _token?: null,
      tokenId?: null,
      principal?: null,
      user?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { _token: string; tokenId: BigNumber; principal: BigNumber; user: string }
    >;

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

    "Payback(address,uint256,uint256,address)"(
      _token?: null,
      tokenId?: null,
      amount?: null,
      user?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { _token: string; tokenId: BigNumber; amount: BigNumber; user: string }
    >;

    Payback(
      _token?: null,
      tokenId?: null,
      amount?: null,
      user?: string | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      { _token: string; tokenId: BigNumber; amount: BigNumber; user: string }
    >;

    "SetAdmin(address,bool)"(
      admin?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { admin: string; enabled: boolean }>;

    SetAdmin(
      admin?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { admin: string; enabled: boolean }>;

    "SetAllowedToken(address,bool)"(
      _token?: string | null,
      enabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { _token: string; enabled: boolean }
    >;

    SetAllowedToken(
      _token?: string | null,
      enabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { _token: string; enabled: boolean }
    >;

    "SetTokenData(address,tuple)"(
      _token?: string | null,
      price?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          duration: BigNumber;
          roi: BigNumber;
        }
      ],
      {
        _token: string;
        price: [BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          duration: BigNumber;
          roi: BigNumber;
        };
      }
    >;

    SetTokenData(
      _token?: string | null,
      price?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          duration: BigNumber;
          roi: BigNumber;
        }
      ],
      {
        _token: string;
        price: [BigNumber, BigNumber, BigNumber] & {
          price: BigNumber;
          duration: BigNumber;
          roi: BigNumber;
        };
      }
    >;
  };

  estimateGas: {
    admins(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    allowedToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    currency(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mortgage(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payback(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowedToken(
      _token: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenData(
      _token: string,
      _tokenData: {
        price: BigNumberish;
        duration: BigNumberish;
        roi: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currency(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mortgage(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payback(
      _token: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      admin: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowedToken(
      _token: string,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenData(
      _token: string,
      _tokenData: {
        price: BigNumberish;
        duration: BigNumberish;
        roi: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
