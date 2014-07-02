/*
 * tx.js
 *
 * Prototype for a bitcoin transaction.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var TxInput = require('txInput.js');
var TxOutput = require('txOutput.js');

// Constructor.
function Tx(txidIn) {
  // Initialize all instance properties
  this.version = null;
  this.numInputs = 0;
  this.numOutputs = 0;
  this.locktime = 0;
  this.inputs[];
  this.outputs[];
}

// Class methods.
Tx.prototype.getTxID = function() {
  return this.txid;
};

Tx.prototype.addInput = function(txHash) {
  inputs[numInputs] = new TxInput(txHash);
  numInputs++;
};

Tx.prototype.addOutput = function(txHash) {
  outputs[numOutputs] = new TxOutput(txHash);
  numOutputs++;
};

// Export the class
module.exports = Tx;
