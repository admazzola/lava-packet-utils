## Lava-Packet-Utils

A library of helper methods for the Lava Packet protocol on the Ethereum Network for conducting fee-less transfers with EIP712 signatures.


## Using this library

npm install lava-packet-utils

import LavaPacketUtils from 'lava-packet-utils';


* Please see the tests folder for an example of how to sign and verify lava packet signatures




#### ----------------------

var params = LavaPacketUtils.getLavaParamsFromData(
    methodName,
    relayAuthority,
    from,
    to,
    lavaContractAddress,
    transferAmountRaw,
    relayerRewardRaw,
    expires,
    nonce);



var typedDataHash = LavaPacketUtils.getLavaTypedDataFromParams(
    methodName,
    relayAuthority,
    from,
    to,
    lavaContractAddress,
    transferAmountRaw,
    relayerRewardRaw,
    expires,
    nonce);


var signature = LavaPacketUtils.signTypedData(typedDataHash,privateKey);


var packetData = getLavaPacket(
  methodName,relayAuthority,from,to,wallet,tokens,
  relayerRewardTokens,expires,nonce,signature);


var hasValidSig = LavaPacketUtils.lavaPacketHasValidSignature(packetData);

var web3Method = LavaPacketUtils.getContractLavaMethod(lavaContractInstance, packetData);
