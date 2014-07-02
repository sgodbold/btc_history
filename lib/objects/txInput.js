/*
 * txInput.js
 *
 * Prototype for a bitcoin transaction input structure.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

// Constructor.
function TxInput(arg) {
  this.txHash = null;
  this.txIndex = null;
  this.scriptLength = 0;
  this.scriptData = 0;
  this.sequenceNumber = 0xFFFFFFFF
}

// Class methods.
Tx.prototype.value = function() {
};

// Export the class
module.exports = Tx;
