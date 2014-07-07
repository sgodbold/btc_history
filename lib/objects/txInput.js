/*
 * txInput.js
 *
 * Prototype for a bitcoin transaction input structure.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

// Constructor. Pass in a blockchain.info Input object.
function TxInput(data) {
  this.n = data.prev_out.n;
  this.value = data.prev_out.value;
  this.txAddr = data.prev_out.addr; // Is the addr property a tx hash??
  this.txIndex = data.prev_out.tx_index;
  this.type = data.prev_out.type;
  this.script = data.prev_out.script;
}

// Testing.
if(require.main === module) {
  var txLookup = require('../blockchainAPI/data.js');
  console.log("TESTING FOR 'TxInput' OBJECT");

  txLookup.singleTxByHash('b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5', function(data) {
    console.log('RAW DATA...');
    console.log(data.inputs[0]);
    console.log('CREATING OBJECT...');
    input = new TxInput(data.inputs[0]);
    console.log('NEW TxInput OBJECT:');
    console.log(input);
  });
}

// Export the class
module.exports = TxInput;
