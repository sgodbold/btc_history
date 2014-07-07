/*
 * tx.js
 *
 * Prototype for a bitcoin transaction.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var TxInput = require('./txInput.js');
var TxOutput = require('./txOutput.js');
var txLookup = require('../blockchainAPI/txLookup.js');
var btcData = require('../blockchainAPI/data.js');

// Constructor.
function Tx(dataIn) {
  // Initialize all instance properties.
  this.doubleSpend = true;
  this.blockHeight = 0;
  this.time = 0;
  this.relayed = '0.0.0.0';
  this.hash = '';
  this.txIndex = 0;
  this.version = 0;
  this.numInputs = 0;
  this.numOutputs = 0;
  this.inputs = new Array();
  this.outputs = new Array();

  // Check if constructor was called with a hash or transaction data.
  // This pretty much is overloading the constructor.
  if(txLookup.txValidate(dataIn)) {
    btcData.singleTxByHash(dataIn, function(apiValue) {
      this.doubleSpend = apiValue.double_spend;
      this.blockHeight = apiValue.block_height;
      this.time = apiValue.time;
      this.relayed = apiValue.relayed_by;
      this.hash = dataIn;
      this.txIndex = apiValue.tx_index;
      this.version = apiValue.ver;
      this.numInputs = apiValue.vin_sz;
      this.numOutputs = apiValue.vout_sz;

      // Create all txInput objects.
      for(i=0; i < apiValue.vin_sz; i++) {
        // FIXME: Find way to use object methods in constructor.
        this.inputs[i] = new TxInput(apiValue.inputs[i]);
      }
      // Create all txOutput objects.
      for(i=0; i < apiValue.vout_sz; i++) {
        // FIXME: Find way to use object methods in constructor.
        this.outputs[i] = new TxOutput(apiValue.out[i]);
      }
    }.bind(this));
  }
  else {
    // Object constructor.
    this.doubleSpend = dataIn.double_spend;
    this.blockHeight = dataIn.block_height;
    this.time = dataIn.time;
    this.relayed = dataIn.relayed_by;
    this.hash = dataIn.hash;
    this.txIndex = dataIn.tx_index;
    this.version = dataIn.ver;
    this.numInputs = dataIn.vin_sz;
    this.numOutputs = dataIn.vout_sz;

    // Create all txInput objects.
    for(i=0; i < dataIn.vin_sz; i++) {
      // FIXME: Find way to use object methods in constructor.
      this.inputs[i] = new TxInput(dataIn.inputs[i]);
    }
    // Create all txOutput objects.
    for(i=0; i < dataIn.vout_sz; i++) {
      // FIXME: Find way to use object methods in constructor.
      this.outputs[i] = new TxOutput(dataIn.out[i]);
    }
  }
}

// Testing.
if(require.main === module) {
  var request = require('request');
  console.log("TESTING FOR 'Tx' OBJECT");

  console.log('CREATING OBJECT WITH HASH CONSTRUCTOR');
  // Hash constructor testing.
  tx = new Tx('b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5');
  setTimeout(function() {
    console.log("TX 1");
    console.log(tx);
  }, 1000);

  // Transaction data constructor testing.
  console.log('CREATING OBJECT WITH OBJECT CONSTRUCTOR');
  btcData.singleTxByHash('b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5', function(apiValue) {
    tx2 = new Tx(apiValue);
    setTimeout(function() {
      console.log("TX 2");
      console.log(tx2);

      console.log("DO THEY EQUAL?");
      console.log(tx === tx2);
    }, 5000);
  });

}

// Export the class
module.exports = Tx;
