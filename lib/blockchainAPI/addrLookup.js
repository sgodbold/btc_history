/*
 * addrLookup.js
 *
 * Functions to get API values from the 'Address Lookups' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

// TODO: Implement confirmation filtering.
//
// Quote:
//  To filter by x number of confirmations include the confirmations parameter
//  e.g. /q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj?confirmations=6

var request = require('request');

// Call this function before any other parsing functions!
// All other functions in this library depend on a valid address being passed to
// them, as they won't do any checking of their own.
exports.addressValidate = function addressValidate(addr) {
  // Check for valid character types.

  // Check for valid number of characters.

  // Check that address has been seen on the btc network.
  // If it hasn't, then there won't be any real btc on it...

  return True;
}

// getReceivedByAddress
// Get the total number of bitcoins received by an address (in satoshi).
//
// TODO: Implement parameters 'start_time' and 'end_time'
// TODO: Implement multiple addresses separated by |
exports.getReceivedByAddress = function getReceivedByAddress(addr, callback) {
  var apiURL = 'http://blockchain.info/q/getreceivedbyaddress/' + addr;

  request(apiURL, function (error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// getSentByAddress
// Get the total number of bitcoins send by an address (in satoshi).
exports.getSentByAddress = function getSentByAddress(addr, callback) {
  var apiURL = 'http://blockchain.info/q/getsentbyaddress/' + addr;

  request(apiURL, function (error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// addressBalance
// Get the balance of an address (in satoshi).
exports.addressBalance = function addressBalance(addr, callback) {
  var apiURL = 'http://blockchain.info/q/addressbalance/' + addr;

  request(apiURL, function (error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// addressFirstSeen
// Timestamp of the block an address was first confirmed in. 
exports.addressFirstSeen = function addressFirstSeen(addr, callback) {
  var apiURL = 'http://blockchain.info/q/addressfirstseen/' + addr;

  request(apiURL, function (error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}
