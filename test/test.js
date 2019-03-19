var assert = require('assert');
var LavaPacketUtils =  require('../src/index');


describe('Array', function() {
  describe('sign lava packet ', function() {
    it('should sign and validate a packet', function(){

      var lavaAddress = '0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954';

      var testAccount = {
        publicAddress: '0xE8241084240614d7c0336466FeB27b9af3694dBC',
        privateKey: '6BA399A639D31DD6D55AC89EA5D2704FEA598E0CE0337B289CC98BDC83AD31DA'
      }

      var lavaPacket = LavaPacketUtils.getLavaPacket(
          'transfer',
          '0x0000000000000000000000000000000000000000',
           testAccount.publicAddress,
          testAccount.publicAddress,
          lavaAddress,
          0,
          0,
          99999999,
          '0xfffffff');

    //  var msgParams = {data: params};
      var privKey = testAccount.privateKey;
      //needs to be a buffer ?

      var typedDataHash = LavaPacketUtils.getLavaTypedDataHashFromPacket(lavaPacket);

        var signature = LavaPacketUtils.signTypedData(typedDataHash,privKey);

        lavaPacket.signature = signature;

        var hasValidSig = LavaPacketUtils.lavaPacketHasValidSignature(lavaPacket);


        assert.ok(hasValidSig)

       assert.equal('0xc1a6c2e517bd0a33642bc7aa35ff7e53ddb52f49360ab65a3f012c8b2e8234743a069bb3cebf8c959cf53e160510742a581d7506b2eb67ecb622667ed4743f511c' , signature);
    });
  });
});
