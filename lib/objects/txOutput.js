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
function TxOutput(arg) {
  this.value = 0;
  this.scriptLength = 0;
  this.outputScript = 0;
}

// Class methods.
Tx.prototype.value = function() {
};

// Export the class
module.exports = Tx;
