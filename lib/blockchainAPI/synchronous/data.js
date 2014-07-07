/*
 * data.js
 *
 * Functions to get API values from the JSON Data API. All API calls will
 * return a json object. For more info: 'https://blockchain.info/api/blockchain_api
 *
 * 
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// singleBlockByIndex
// Get data for a single block by providing the block index number.
exports.singleBlockByIdx = function singleBlockByIndex(blockIdx) {
  var apiURL = 'http://blockchain.info/rawblock/' + blockIdx + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// singleBlockByHash
// Get data for a single block by providing the block hash.
exports.singleBlockByHash = function singleBlockByHash(blockHash) {
  var apiURL  = 'http://blockchain.info/rawblock/' + blockHash;

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// singleTxByIndex
// Get data on a single transaction by providing the transaction index.
exports.singleTxByIdx = function singleTxByIdx(txIndex) {
  var apiURL = 'http://blockchain.info/rawtx/' + txIndex + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// singleTxByHash
// Get data on a single transaction by providing the transaction hash.
exports.singleTxByHash = function singleTxByHash(txHash) {
  var apiURL = 'http://blockchain.info/rawtx/' + txHash;

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// chartData
// Get data for a certain chart type from blockchain.info.
exports.chartData = function chartData(chartType) {
  var apiURL = 'http://blockchain.info/charts/' + chartType + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// blockHeight
// Get data on a block at a certain height.
exports.blockHeight = function blockHeight(height) {
  var apiURL = 'http://blockchain.info/block-height/' + height + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// singleAddrByHash
// Get data on a single address by providing the hash_160.
// TODO: Implement transaction limit parameter.
// TODO: Implement transaction skipping parameter.
exports.singleAddrByHash = function singleAddrByAddr(hash160) {
  var apiURL = 'http://blockchain.info/address/' + hash160 + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// singleAddrByAddr
// Get data on a single address by providing an address.
// TODO: Implement transaction limit parameter.
// TODO: Implement transaction skipping parameter.
exports.singleAddrByAddr = function singleAddrByAddr(addr) {
  var apiURL = 'http://blockchain.info/address/' + addr + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// unspentOutputs
// Get unspent outputs of a single address.
// Returned 'tx_hash' field is in reverse byte order.
// TODO: Implement multiple addresses split by '|'.
exports.unspentOutputs = function unspentOutput(addr) {
  var apiURL = 'http://blockchain.info/unspent?active=' + addr;

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// latestBlock
// Get data on the latest block found.
exports.latestBlock = function latestBlock() {
  var apiURL = 'http://blockchain.info/latestblock';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// unconfirmedTx
// Get data of all unconfirmed transactions.
exports.unconfirmedTx = function unconfirmedTx() {
  var apiURL = 'http://blockchain.info/unconfirmed-transactions?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// blocksForDay
// Get data on all blocks found in a day. Input is milliseconds since
// the Unix Epoch
exports.blocksForDay = function blocksForDay(milliseconds) {
  var apiURL = 'http://blockchain.info/blocks/' + milliseconds + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// blocksForPool
// Get data on all blocks found by a certain pool.
exports.blocksForPool = function blocksForPool(poolName) {
  var apiURL = 'http://blockchain.info/blocks/' + poolName + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}

// inventoryData
// Get data on an inventory. Input is a block hash.
// FIXME: what the hell does this do??
exports.inventoryData = function inventoryData(hash) {
  var apiURL = 'http://blockchain.info/inv/' + hash + '?format=json';

  request(apiURL, function(error, response, body) {
    body = JSON.parse(body);
    if(!error && response.statusCode == 200) return(body);
    else return(null);
  });
}
