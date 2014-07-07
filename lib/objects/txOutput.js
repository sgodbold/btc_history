/*
 * txOutput.js
 *
 * Prototype for a bitcoin transaction output structure.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

// Constructor.
function TxOutput(data) {
  this.n = data.n;
  this.value = data.value;
  this.addr = data.addr;
  this.txIndex = data.tx_index;
  this.spent = data.spent;
  this.type = data.type;
  this.script = data.script;
}

// Testing.
if(require.main === module) {
  var txLookup = require('../blockchainAPI/data.js');
  console.log("TESTING FOR 'TxOutput' OBJECT");

  txLookup.singleTxByHash('b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5', function(data) {
    console.log('RAW DATA...');
    console.log(data.out[0]);
    console.log('CREATING OBJECT...');
    output = new TxOutput(data.out[0]);
    console.log('NEW TxOutput OBJECT:');
    console.log(output);
  });
}
// Export the class
module.exports = TxOutput;
