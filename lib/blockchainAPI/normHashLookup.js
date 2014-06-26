/*
 * normHashLookup.js
 *
 * Functions to get API values from the 'Normalized Hash Lookups' secion of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// hashTonTxID
// Convert a transaction hash to ntxid.
exports.hashTonTxID = function hashTonTxID(txHash, callback) {
  var apiURL = 'https://blockchain.info/q/hashtontxid/' + txHash;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// nTxIDToHash
// Convert an ntxid to transaction hash.
exports.nTxIDToHash = function nTxIDToHash(nTxID, callback) {
  var apiURL = 'https://blockchain.info/q/ntxidtohash/' + nTxID;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}
