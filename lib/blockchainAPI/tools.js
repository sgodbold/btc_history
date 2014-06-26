/* tools.js
 *
 * Functions to get API values from the 'Tools' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steve.godbold@gmail.com
*/

var request = require('request');

// addressToHash
// Converts a bitcoin address to a hash 160.
exports.addressToHash = function addressToHash(addr, callback) {
  var apiURL = 'https://blockchain.info/q/addresstohash/' + addr;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// hashToAddress
// Converts a hash 160 to a bitcoin address.
exports.hashToAddress = function hashToAddress(hash, callback) {
  var apiURL = 'https://blockchain.info/q/hashtoaddress/' + hash;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// hashPubkey
// Converts a public key to a hash 160.
exports.hashPubkey = function hashPubkey(pubkey, callback) {
  var apiURL = 'https://blockchain.info/q/hashpubkey/' + pubkey;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// addrPubkey
// Converts a public key to an Address.
exports.addrPubkey = function addrPubkey(pubkey, callback) {
  var apiURL = 'https://blockchain.info/q/addrpubkey/' + pubkey;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// pubkeyAddr
// Converts an address to public key (if available).
exports.pubkeyAddr = function pubkeyAddr(addr, callback) {
  var apiURL = 'https://blockchain.info/q/pubkeyaddr/' + addr;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// newKey
// Generates a new Address private key pair (space separated).
exports.newKey = function newKey(callback) {
  var apiURL = 'https://blockchain.info/q/newkey/';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}
