/*
 * block.js
 *
 * Prototype for a bitcoin block structure.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var Tx = require('./tx.js');
var btcData = require('../blockchainAPI/data.js');

// Constructor.
function Block(blockHash) {
  // Initialize all instance properties.
  this.hash = '';
  this.ver = 0;
  this.prevBlock = '';
  this.mrklRoot = '';
  this.time = 0;
  this.bits = 0;
  this.fee = 0;
  this.nonce = 0;
  this.numTx = 0;
  this.size = 0;
  this.blockIdx = 0;
  this.mainChain = true;
  this.height = 0;
  this.recieveTime = 0;
  this.relayedBy = '0.0.0.0';
  this.tx = new Array();

  btcData.singleBlockByHash(blockHash, function(apiValue) {
    this.hash = apiValue.hash;
    this.ver = apiValue.ver;
    this.prevBlock = apiValue.prev_block;
    this.mrklRoot = apiValue.mrkl_root;
    this.time = apiValue.time;
    this.bits = apiValue.bits;
    this.fee = apiValue.fee;
    this.nonce = apiValue.nonce;
    this.numTx = apiValue.n_tx;
    this.size = apiValue.size;
    this.blockIdx = apiValue.block_index;
    this.mainChain = apiValue.main_chain;
    this.height = apiValue.height;
    this.receiveTime = apiValue.received_time;
    this.relayedBy = apiValue.relayed_by;

    // Create all Tx objects.
    //for(var i=0; i < apiValue.n_tx; i++) {
    for(var i=1; i < apiValue.n_tx; i++) {
      this.tx[i] = new Tx(apiValue.tx[i]);
    }

    console.log("DEFINE");
  }.bind(this));
}

/*
// Class methods.
Tx.prototype.value = function() {
};
*/

// Testing.
if(require.main === module) {
  console.log("TESTING FOR 'Block' OBJECT");
  console.log('CREATING OBJECT');

  block = new Block('00000000000000002da9bb48ca0054029724c6598fe4980e2ca83efe7b8a99aa');
  setTimeout(function() {
    console.log(block);
  }, 10000);
}

// Export the class
module.exports = Tx;
