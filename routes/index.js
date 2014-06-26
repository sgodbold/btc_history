var express = require('express');
var router = express.Router();
var async = require('async');
var addrLib = require('../lib/blockchainAPI/addrLookup.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET address page. */
// Requires GET variable '?address=' in the URL request.
router.get('/address', function(req, res) {
  var addrIn = req.query.address;

  async.parallel({
    addrReceived: function(callback) {
      addrLib.getReceivedByAddress(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrRecieved: Error!");
      });
    },

    addrSent: function(callback) {
      addrLib.getSentByAddress(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrSent: Error!");
      });
    },

    addrBalance: function(callback) {
      addrLib.addressBalance(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrBalance: Error!");
      });
    },

    addrAge: function(callback) {
      addrLib.addressFirstSeen(addrIn, function(apiValue) {
        if(apiValue != null) callback(null, apiValue);
        else callback("addrAge: Error!");
      });
    }

  }, function(err, results) {
      if(!err) {
        res.render('address', {
          'address' : addrIn,
          'addrReceived' : results.addrReceived,
          'addrSent' : results.addrSent,
          'addrBalance' : results.addrBalance,
          'addrAge' : results.addrAge
        });
      }
      else {
        res.send(err);
      }
  });

});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});

/* GET about page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;
