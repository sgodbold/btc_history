/*
 * misc.js
 *
 * Functions to get API values from the 'Misc' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// unconfirmedCount
// Number of pending unconfirmed transactions.
exports.unconfirmedCount = function unconfirmedCount(callback) {
  var apiURL = 'https://blockchain.info/q/unconfirmedcount';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// 24hrPrice
// 24 hour weighted price from the largest exchanges.
exports.price24hr = function price24hr(callback) {
  var apiURL = 'https://blockchain.info/q/24hrprice';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// marketcap
// USD market cap (based on 24 hour weighted price).
exports.marketcap = function unconfirmedCount(callback) {
  var apiURL = 'https://blockchain.info/q/marketcap';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// 24hrTransactionCount
// Number of transactions in the past 24 hours.
exports.transactionCount24hr = function transactionCount24hr(callback) {
  var apiURL = 'https://blockchain.info/q/24hrtransactioncount';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// 24hrbtcSent
// Number of btc sent in the last 24 hours (in satoshi).
exports.btcSent24hr = function btcSent24hr(callback) {
  var apiURL = 'https://blockchain.info/q/24hrbtcsent';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// hashRate
// Estimated network hash rate in gigahash.
exports.hashRate = function hashRate(callback) {
  var apiURL = 'https://blockchain.info/q/hashrate';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// rejected
// Lookup the reason why the provided tx or block hash was rejected (if any).
exports.rejected = function rejected(txHash, callback) {
  var apiURL = 'https://blockchain.info/q/rejected/' + txHash;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

