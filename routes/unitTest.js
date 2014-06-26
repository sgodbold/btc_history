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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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
        res.render('unitTest/blockchainAPI', {
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

module.exports = router;
