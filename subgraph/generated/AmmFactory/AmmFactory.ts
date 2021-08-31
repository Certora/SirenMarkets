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

export class AmmCreated extends ethereum.Event {
  get params(): AmmCreated__Params {
    return new AmmCreated__Params(this);
  }
}

export class AmmCreated__Params {
  _event: AmmCreated;

  constructor(event: AmmCreated) {
    this._event = event;
  }

  get amm(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AmmImplementationUpdated extends ethereum.Event {
  get params(): AmmImplementationUpdated__Params {
    return new AmmImplementationUpdated__Params(this);
  }
}

export class AmmImplementationUpdated__Params {
  _event: AmmImplementationUpdated;

  constructor(event: AmmImplementationUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

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

export class TokenImplementationUpdated extends ethereum.Event {
  get params(): TokenImplementationUpdated__Params {
    return new TokenImplementationUpdated__Params(this);
  }
}

export class TokenImplementationUpdated__Params {
  _event: TokenImplementationUpdated;

  constructor(event: TokenImplementationUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AmmFactory extends ethereum.SmartContract {
  static bind(address: Address): AmmFactory {
    return new AmmFactory("AmmFactory", address);
  }

  ammImplementation(): Address {
    let result = super.call(
      "ammImplementation",
      "ammImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ammImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ammImplementation",
      "ammImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  amms(param0: Bytes): Address {
    let result = super.call("amms", "amms(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_amms(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("amms", "amms(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  seriesController(): Address {
    let result = super.call(
      "seriesController",
      "seriesController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_seriesController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "seriesController",
      "seriesController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenImplementation(): Address {
    let result = super.call(
      "tokenImplementation",
      "tokenImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenImplementation",
      "tokenImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateAmmCall extends ethereum.Call {
  get inputs(): CreateAmmCall__Inputs {
    return new CreateAmmCall__Inputs(this);
  }

  get outputs(): CreateAmmCall__Outputs {
    return new CreateAmmCall__Outputs(this);
  }
}

export class CreateAmmCall__Inputs {
  _call: CreateAmmCall;

  constructor(call: CreateAmmCall) {
    this._call = call;
  }

  get _sirenPriceOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _underlyingToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _priceToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _collateralToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _tradeFeeBasisPoints(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class CreateAmmCall__Outputs {
  _call: CreateAmmCall;

  constructor(call: CreateAmmCall) {
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

  get _ammImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenImplementation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _seriesController(): Address {
    return this._call.inputValues[2].value.toAddress();
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

export class UpdateAmmImplementationCall extends ethereum.Call {
  get inputs(): UpdateAmmImplementationCall__Inputs {
    return new UpdateAmmImplementationCall__Inputs(this);
  }

  get outputs(): UpdateAmmImplementationCall__Outputs {
    return new UpdateAmmImplementationCall__Outputs(this);
  }
}

export class UpdateAmmImplementationCall__Inputs {
  _call: UpdateAmmImplementationCall;

  constructor(call: UpdateAmmImplementationCall) {
    this._call = call;
  }

  get newAmmImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAmmImplementationCall__Outputs {
  _call: UpdateAmmImplementationCall;

  constructor(call: UpdateAmmImplementationCall) {
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

  get _newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateImplementationCall__Outputs {
  _call: UpdateImplementationCall;

  constructor(call: UpdateImplementationCall) {
    this._call = call;
  }
}

export class UpdateTokenImplementationCall extends ethereum.Call {
  get inputs(): UpdateTokenImplementationCall__Inputs {
    return new UpdateTokenImplementationCall__Inputs(this);
  }

  get outputs(): UpdateTokenImplementationCall__Outputs {
    return new UpdateTokenImplementationCall__Outputs(this);
  }
}

export class UpdateTokenImplementationCall__Inputs {
  _call: UpdateTokenImplementationCall;

  constructor(call: UpdateTokenImplementationCall) {
    this._call = call;
  }

  get newTokenImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTokenImplementationCall__Outputs {
  _call: UpdateTokenImplementationCall;

  constructor(call: UpdateTokenImplementationCall) {
    this._call = call;
  }
}