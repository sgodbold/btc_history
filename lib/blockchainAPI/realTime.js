/*
 * realTime.js
 *
 * Functions to get API values from the 'Real-Time' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// getDifficulty
// Current difficulty target as a decimal number.
exports.getDifficulty = function getDifficulty(callback) {
  var apiURL = 'https://blockchain.info/q/getdifficulty';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// getBlockCount
// Current block height in the longest chain.
exports.getBlockCount = function getBlockCount(callback) {
  var apiURL = 'https://blockchain.info/q/getblockcount';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// latestHash
// Hash of the latest block.
exports.latestHash = function latestHash(callback) {
  var apiURL = 'https://blockchain.info/q/latesthash';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// bcPerBlock
// Current block reward in BTC.
exports.bcPerBlock = function bcPerBlock(callback) {
  var apiURL = 'https://blockchain.info/q/bcperblock';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// totalbc
// Total Bitcoins in circulation (delayed by up to 1 hour]).
exports.totalbc = function totalbc(callback) {
  var apiURL = 'https://blockchain.info/q/totalbc';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// probability
// Probability of finding a valid block each hash attempt.
exports.probability = function probability(callback) {
  var apiURL = 'https://blockchain.info/q/probability';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// hashesToWin
// Average number of hash attempts needed to solve a block.
exports.hashesToWin = function hashesToWin(callback) {
  var apiURL = 'https://blockchain.info/q/hashestowin';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// nextRetarget
// Block height of the next difficulty retarget.
exports.nextRetarget = function nextRetarget(callback) {
  var apiURL = 'https://blockchain.info/q/nextretarget';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// avgTxSize
// Average transaction size for the past 1000 blocks.
//
// TODO: Change the number of blocks by passing an integer as the second argument e.g. avgtxsize/2000 
exports.avgTxSize = function avgTxSize(callback) {
  var apiURL = 'https://blockchain.info/q/avgtxsize';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// avgTxValue
// Average transaction value (1000 Default).
exports.avgTxValue = function avgTxValue(callback) {
  var apiURL = 'https://blockchain.info/q/avgtxvalue';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// interval
// average time between blocks in seconds.
exports.interval = function interval(callback) {
  var apiURL = 'https://blockchain.info/q/interval';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// eta
// estimated time until the next block (in seconds).
exports.eta = function eta(callback) {
  var apiURL = 'https://blockchain.info/q/eta';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

// avgTxNumber
// Average number of transactions per block (100 Default).
exports.avgTxNumber = function avgTxNumber(callback) {
  var apiURL = 'https://blockchain.info/q/avgtxnumber';

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}
