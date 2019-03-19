## Lava-Packet-Utils

A library of helper methods for the Lava Packet protocol on the Ethereum Network for conducting fee-less transfers with EIP712 signatures.


## Using this library
npm install lava-packet-utils

import LavaPacketUtils from 'lava-packet-utils';



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
  relayerRewardTokens,expires,nonce,signature)
{

  return {
    methodName:methodName,
    relayAuthority:relayAuthority,
    from: from,
    to: to,
    wallet:wallet,
    tokens:tokens,
    relayerRewardTokens:relayerRewardTokens,
    expires:expires,
    nonce:nonce,
    signature:signature
  }


}


var hasValidSig = LavaPacketUtils.lavaPacketHasValidSignature(packetData);

var web3Method = LavaPacketUtils.getContractLavaMethod(lavaContractInstance, packetData);
