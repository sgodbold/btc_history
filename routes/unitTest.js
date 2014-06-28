var express = require('express');
var router = express.Router();
var async = require('async');

var realTime = require('../lib/blockchainAPI/realTime.js');
var addrLib = require('../lib/blockchainAPI/addrLookup.js');
var txLookup = require('../lib/blockchainAPI/txLookup.js');
var normHashLookup = require('../lib/blockchainAPI/normHashLookup.js');
var tools = require('../lib/blockchainAPI/tools.js');
var misc = require('../lib/blockchainAPI/misc.js');
var firstBits = require('../lib/blockchainAPI/firstBits.js');
var data = require('../lib/blockchainAPI/data.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('unitTest/index');
});

/* GET /realTime page. */
router.get('/realTime', function(req, res) {
  var names = ['getDifficulty', 'getBlockCount', 'latestHast', 'bcPerBlock',
              'totalbc', 'probability', 'hashesToWin', 'nextRetarget',
              'interval', 'eta', 'avgTxNumber']

  async.parallel([
    // getDifficulty
    function(callback) {
      realTime.getDifficulty(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("getDifficulty: Error!");
      });
    },

    // getBlockCount
    function(callback) {
      realTime.getBlockCount(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("getBlockCount: Error!");
      });
    },

    // latestHash
    function(callback) {
      realTime.latestHash(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("latestHash: Error!");
      });
    },

    // bcPerBlock
    function(callback) {
      realTime.bcPerBlock(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("bcPerBlock: Error!");
      });
    },

    // totalbc
    function(callback) {
      realTime.totalbc(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("totalbc: Error!");
      });
    },

    // probability
    function(callback) {
      realTime.probability(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("probability: Error!");
      });
    },

    // hashesToWin
    function(callback) {
      realTime.hashesToWin(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("hashesToWin: Error!");
      });
    },

    // nextRetarget
    function(callback) {
      realTime.nextRetarget(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("nextRetarget: Error!");
      });
    },

    /* FIXME: These URLs work like half the time...
    // avgTxSize
    function(callback) {
      realTime.avgTxSize(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("avgTxSize: Error!");
      });
    },

    // avgTxValue
    function(callback) {
      realTime.avgTxValue(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("avgTxValue: Error!");
      });
    },
    */

    // interval
    function(callback) {
      realTime.interval(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("interval: Error!");
      });
    },

    // eta
    function(callback) {
      realTime.eta(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("eta: Error!");
      });
    },

    // avgTxNumber
    function(callback) {
      realTime.avgTxNumber(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("avgTxNumber: Error!");
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'realTime',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /addressLookup page. */
// Requires GET variable '?address=' in the URL request.
router.get('/addrLookup', function(req, res) {
  var addrIn = req.query.address;
  var names = ['addrReceived', 'addrSent', 'addrBalance', 'addrAge'];

  async.parallel([
    // addrReceived
    function(callback) {
      addrLib.getReceivedByAddress(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrRecieved: Error!");
      });
    },

    // addrSent
    function(callback) {
      addrLib.getSentByAddress(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrSent: Error!");
      });
    },

    // addrBalance
    function(callback) {
      addrLib.addressBalance(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrBalance: Error!");
      });
    },

    // AddrAge
    function(callback) {
      addrLib.addressFirstSeen(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrAge: Error!");
      });
    }

  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'addressLookups',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /txLookup page. */
// Requires GET variables '?address= &txHash=' in the URL request.
router.get('/txLookup', function(req, res) {
  var addrIn = req.query.address;
  var txHashIn = req.query.txHash;
  var names = ['txTotalBtcOutput', 'txTotalBtcInput', 'txFee', 'txResult'];

  async.parallel([
    function(callback) {
      txLookup.txTotalBtcOutput(txHashIn, function(apivalue) {
        if(apivalue != null) callback(null, apivalue);
        else callback("txTotalBtcOutput: error!");
      });
    },
    
    function(callback) {
      txLookup.txTotalBtcInput(txHashIn, function(apivalue) {
        if(apivalue != null) callback(null, apivalue);
        else callback("txTotalBtcInput: error!");
      });
    },

    function(callback) {
      txLookup.txFee(txHashIn, function(apivalue) {
        if(apivalue != null) callback(null, apivalue);
        else callback("txFee: error!");
      });
    },

    // TODO: Test this function further for errors.
    function(callback) {
      txLookup.txResult(txHashIn, addrIn, function(apivalue) {
        if(apivalue != null) callback(null, apivalue);
        else callback("txResult: error!");
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'txLookup',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /normHashLookup page. */
// Requires GET variables '?txhash= &nTxID=' in the URL request.
router.get('/normHashLookup', function(req, res) {
  var txHashIn = req.query.txHash;
  var nTxIDIn = req.query.nTxID;
  var names = ['hashTonTxID', 'nTxIDToHash'];

  async.parallel([
    function(callback) {
      normHashLookup.hashTonTxID(txHashIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('hashTonTxID: Error!');
      });
    },

    function(callback) {
      normHashLookup.nTxIDToHash(nTxIDIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('nTxIDTOHash: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'normHashLookup',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /tools page. */
router.get('/tools', function(req, res) {
  var addrIn = req.query.address;
  var hashIn = req.query.hash;
  var pubkeyIn = req.query.pubkey;

  var names = ['addressToHash', 'hashToAddress', 'hashPubkey', 'addrPubkey', 'pubkeyAddr', 'newKey'];

  async.parallel([
    function(callback) {
      tools.addressToHash(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    },

    function(callback) {
      tools.hashToAddress(hashIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    },

    function(callback) {
      tools.hashPubkey(pubkeyIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    },

    function(callback) {
      tools.addrPubkey(pubkeyIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    },

    function(callback) {
      tools.pubkeyAddr(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    },

    function(callback) {
      tools.newKey(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback(null);
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'tools',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /misc page. */
router.get('/misc', function(req, res) {
  var txHashIn = req.query.txHash;
  var names = ['unconfirmedCount', '24hrPrice', 'marketcap',
              '24hrTransactionCount', '24hrbtcSent', 'hashRate', 'rejected']

  async.parallel([

    function(callback) {
      misc.unconfirmedCount(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('unconfirmedCount: Error!');
      });
    },

    function(callback) {
      misc.price24hr(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('price24hr: Error!');
      });
    },

    function(callback) {
      misc.marketcap(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('marketcap: Error!');
      });
    },

    function(callback) {
      misc.transactionCount24hr(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('transactionCount24hr: Error!');
      });
    },

    function(callback) {
      misc.btcSent24hr(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('btcSent24hr: Error!');
      });
    },

    function(callback) {
      misc.hashRate(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('hashRate: Error!');
      });
    },

    function(callback) {
      misc.rejected(txHashIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('rejected: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'misc',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /firstBits page. */
router.get('/firstBits', function(req, res) {
  var addr = req.query.address;
  var names = ['getFirstBits'];

  async.parallel([
    function(callback) {
      firstBits.getFirstBits(addr, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('getFirstBits: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainQuery', {
          'libraryTitle' : 'getFirstBits',
          'names' : names,
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleBlockIndex page. */
router.get('/singleBlockIndex', function(req, res){
  var blockIdx = req.query.blockIdx;

  async.parallel([
    function(callback) {
      data.singleBlockByIdx(blockIdx, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleBlockByIndex: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleBlockIndex',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleBlockHash page. */
router.get('/singleBlockHash', function(req, res){
  var blockHash = req.query.blockHash;

  async.parallel([
    function(callback) {
      data.singleBlockByHash(blockHash, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleBlockByHash: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleBlockHash',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleTxIndex page. */
router.get('/singleTxIndex', function(req, res){
  var txIdx = req.query.txIdx;

  async.parallel([
    function(callback) {
      data.singleTxByIdx(txIdx, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleTxByIndex: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleTxIndex',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleTxHash page. */
router.get('/singleTxHash', function(req, res){
  var txHash = req.query.txHash;

  async.parallel([
    function(callback) {
      data.singleTxByHash(txHash, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleTxByHash: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleTxHash',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /chartData page. */
router.get('/chartData', function(req, res){
  var chartType = req.query.chartType;

  async.parallel([
    function(callback) {
      data.chartData(chartType, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('chartData: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'chartData',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /blockHeight page. */
router.get('/blockHeight', function(req, res){
  var blockHeight = req.query.blockHeight;

  async.parallel([
    function(callback) {
      data.blockHeight(blockHeight, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('blockHeight: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'blockHeight',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleAddrByAddr page. */
router.get('/singleAddrByAddr', function(req, res){
  var addr = req.query.address;

  async.parallel([
    function(callback) {
      data.singleAddrByAddr(addr, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleAddrByAddr: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleAddrByAddr',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /singleAddrByHash page. */
router.get('/singleAddrByHash', function(req, res){
  var addrHash = req.query.addrHash;

  async.parallel([
    function(callback) {
      data.singleAddrByHash(addrHash, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('singleAddrByHash: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'singleAddrByHash',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /unspentOutputs page. */
router.get('/unspentOutputs', function(req, res){
  var addr = req.query.address;

  async.parallel([
    function(callback) {
      data.unspentOutputs(addr, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('unspentOutputs: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'unspentOutputs',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /latestBlock page. */
router.get('/latestBlock', function(req, res){
  async.parallel([
    function(callback) {
      data.latestBlock(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('latestBlock: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'latestBlock',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /unconfirmedTx page. */
router.get('/unconfirmedTx', function(req, res){
  async.parallel([
    function(callback) {
      data.unconfirmedTx(function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('unconfirmedTx: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'unconfirmedTx',
          'results' : results
        });
      }
      else {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'unconfirmedTx',
          'results' : results
        });
      }
  });
});

/* GET /blocksForDay page. */
router.get('/blocksForDay', function(req, res){
  var milliseconds = req.query.milliseconds;

  async.parallel([
    function(callback) {
      data.blocksForDay(milliseconds, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('blocksForDay: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.send(results);
      }
      else {
        res.send(err);
      }
  });
});

/* GET /blocksForPool page. */
router.get('/blocksForPool', function(req, res){
  var poolName = req.query.pool;

  async.parallel([
    function(callback) {
      data.blocksForPool(poolName, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('blocksForPool: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'blocksForPool',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

/* GET /inventoryData page. */
router.get('/inventoryData', function(req, res){
  var hash = req.query.hash;

  async.parallel([
    function(callback) {
      data.inventoryData(hash, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback('inventoryData: Error!');
      });
    }
  ], function(err, results) {
      if(!err) {
        res.render('unitTest/blockchainData', {
          'libraryTitle' : 'blocksForPool',
          'results' : results
        });
      }
      else {
        res.send(err);
      }
  });
});

module.exports = router;
