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

