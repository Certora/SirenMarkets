// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CodeAddressUpdated extends ethereum.Event {
  get params(): CodeAddressUpdated__Params {
    return new CodeAddressUpdated__Params(this);
  }
}

export class CodeAddressUpdated__Params {
  _event: CodeAddressUpdated;

  constructor(event: CodeAddressUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OracleSet extends ethereum.Event {
  get params(): OracleSet__Params {
    return new OracleSet__Params(this);
  }
}

export class OracleSet__Params {
  _event: OracleSet;

  constructor(event: OracleSet) {
    this._event = event;
  }

  get underlyingToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get priceToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get oracle(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get earliestSettlementDate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SettlementPriceSet extends ethereum.Event {
  get params(): SettlementPriceSet__Params {
    return new SettlementPriceSet__Params(this);
  }
}

export class SettlementPriceSet__Params {
  _event: SettlementPriceSet;

  constructor(event: SettlementPriceSet) {
    this._event = event;
  }

  get underlyingToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get priceToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get settlementDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PriceOracle__getSettlementPriceResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class PriceOracle extends ethereum.SmartContract {
  static bind(address: Address): PriceOracle {
    return new PriceOracle("PriceOracle", address);
  }

  get8amWeeklyOrDailyAligned(_timestamp: BigInt): BigInt {
    let result = super.call(
      "get8amWeeklyOrDailyAligned",
      "get8amWeeklyOrDailyAligned(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_timestamp)]
    );

    return result[0].toBigInt();
  }

  try_get8amWeeklyOrDailyAligned(
    _timestamp: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "get8amWeeklyOrDailyAligned",
      "get8amWeeklyOrDailyAligned(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_timestamp)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentPrice(underlyingToken: Address, priceToken: Address): BigInt {
    let result = super.call(
      "getCurrentPrice",
      "getCurrentPrice(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(underlyingToken),
        ethereum.Value.fromAddress(priceToken)
      ]
    );

    return result[0].toBigInt();
  }

  try_getCurrentPrice(
    underlyingToken: Address,
    priceToken: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentPrice",
      "getCurrentPrice(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(underlyingToken),
        ethereum.Value.fromAddress(priceToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLogicAddress(): Address {
    let result = super.call(
      "getLogicAddress",
      "getLogicAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLogicAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLogicAddress",
      "getLogicAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSettlementPrice(
    underlyingToken: Address,
    priceToken: Address,
    settlementDate: BigInt
  ): PriceOracle__getSettlementPriceResult {
    let result = super.call(
      "getSettlementPrice",
      "getSettlementPrice(address,address,uint256):(bool,uint256)",
      [
        ethereum.Value.fromAddress(underlyingToken),
        ethereum.Value.fromAddress(priceToken),
        ethereum.Value.fromUnsignedBigInt(settlementDate)
      ]
    );

    return new PriceOracle__getSettlementPriceResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_getSettlementPrice(
    underlyingToken: Address,
    priceToken: Address,
    settlementDate: BigInt
  ): ethereum.CallResult<PriceOracle__getSettlementPriceResult> {
    let result = super.tryCall(
      "getSettlementPrice",
      "getSettlementPrice(address,address,uint256):(bool,uint256)",
      [
        ethereum.Value.fromAddress(underlyingToken),
        ethereum.Value.fromAddress(priceToken),
        ethereum.Value.fromUnsignedBigInt(settlementDate)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PriceOracle__getSettlementPriceResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class AddTokenPairCall extends ethereum.Call {
  get inputs(): AddTokenPairCall__Inputs {
    return new AddTokenPairCall__Inputs(this);
  }

  get outputs(): AddTokenPairCall__Outputs {
    return new AddTokenPairCall__Outputs(this);
  }
}

export class AddTokenPairCall__Inputs {
  _call: AddTokenPairCall;

  constructor(call: AddTokenPairCall) {
    this._call = call;
  }

  get underlyingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get priceToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get oracle(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class AddTokenPairCall__Outputs {
  _call: AddTokenPairCall;

  constructor(call: AddTokenPairCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _dateOffset(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetSettlementPriceCall extends ethereum.Call {
  get inputs(): SetSettlementPriceCall__Inputs {
    return new SetSettlementPriceCall__Inputs(this);
  }

  get outputs(): SetSettlementPriceCall__Outputs {
    return new SetSettlementPriceCall__Outputs(this);
  }
}

export class SetSettlementPriceCall__Inputs {
  _call: SetSettlementPriceCall;

  constructor(call: SetSettlementPriceCall) {
    this._call = call;
  }

  get underlyingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get priceToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetSettlementPriceCall__Outputs {
  _call: SetSettlementPriceCall;

  constructor(call: SetSettlementPriceCall) {
    this._call = call;
  }
}

export class SetSettlementPriceForDateCall extends ethereum.Call {
  get inputs(): SetSettlementPriceForDateCall__Inputs {
    return new SetSettlementPriceForDateCall__Inputs(this);
  }

  get outputs(): SetSettlementPriceForDateCall__Outputs {
    return new SetSettlementPriceForDateCall__Outputs(this);
  }
}

export class SetSettlementPriceForDateCall__Inputs {
  _call: SetSettlementPriceForDateCall;

  constructor(call: SetSettlementPriceForDateCall) {
    this._call = call;
  }

  get underlyingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get priceToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get date(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetSettlementPriceForDateCall__Outputs {
  _call: SetSettlementPriceForDateCall;

  constructor(call: SetSettlementPriceForDateCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateImplementationCall extends ethereum.Call {
  get inputs(): UpdateImplementationCall__Inputs {
    return new UpdateImplementationCall__Inputs(this);
  }

  get outputs(): UpdateImplementationCall__Outputs {
    return new UpdateImplementationCall__Outputs(this);
  }
}

export class UpdateImplementationCall__Inputs {
  _call: UpdateImplementationCall;

  constructor(call: UpdateImplementationCall) {
    this._call = call;
  }

  get newPriceOracleImpl(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateImplementationCall__Outputs {
  _call: UpdateImplementationCall;

  constructor(call: UpdateImplementationCall) {
    this._call = call;
  }
}