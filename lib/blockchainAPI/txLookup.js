/*
 * txLookup.j
 *
 * Functions to get API values from the 'Transaction Lookups' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// Call this function before any other transaction operations.
// Will test if the given string is a valid transaction hash.
exports.txValidate = function txValidate(txHash) {
  var valid = true;

  // Check for hash length. All tx hashes are 32 bytes long (64 chars).
  if(txHash.length != 64) valid = false;

  // Check for valid character types. Uses a regex which matches hex chars.
  if(!/^[0-9A-Fa-f]*$/.test(txHash)) valid = false;

  return valid;
}

// txTotalBtcOutput
// Get total output value of a transaction (in satoshi).
exports.txTotalBtcOutput = function txTotalBtcOutput(txHash, callback) {
  var apiURL = 'http://blockchain.info/q/txtotalbtcoutput/' + txHash;
  
  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// txTotalBtcInput
// Get total input value of a transaction (in satoshi).
exports.txTotalBtcInput = function txTotalBtcInput(txHash, callback) {
  var apiURL = 'http://blockchain.info/q/txtotalbtcinput/' + txHash;
  
  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// txFee
// Get fee included in a transaction (in satoshi).
exports.txFee = function txFee(txHash, callback) {
  var apiURL = 'http://blockchain.info/q/txfee/' + txHash;
  
  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// txResult
// Calculate the result of a transaction sent or received to Address.
//
// TODO: Implement multiple addresses separated by |
exports.txResult = function txResult(txHash, addr, callback) {
  var apiURL = 'http://blockchain.info/q/txresult/' + txHash + '/' + addr;
  
  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// Testing.
if(require.main === module) {
  console.log("TESTING VALID HASH");
  var validHash = 'b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5';
  var invalidLength = 'b7e9067c3db0e661d2bb659cb6b44ae1288a10dc2e0845f050c5544716dc7ea5000';
  var invalidChars = 'z7e9067c3db0e661d2bb659cb6y44ae1288a10dc2e084df050c5n44716dc7ea5';

  console.log('1. ' + exports.txValidate(validHash));
  console.log('2. ' + exports.txValidate(invalidLength));
  console.log('3. ' + exports.txValidate(invalidChars));
}
