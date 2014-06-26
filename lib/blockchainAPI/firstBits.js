/*
 * firstBits.js
 *
 * Functions to get API values from the 'Firstbits' section of
 * blockchain.info's query API. For more info: 'https://blockchain.info/q'
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

var request = require('request');

// getFirstBits
// Get the firstbits for a bitcoin address.
exports.getFirstBits = function getFirstBits(addr, callback) {
  var apiURL = 'https://blockchain.info/q/getfirstbits/' + addr;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}

/*
FIXME: ...I have no idea how this function is suppose to work so I'm commenting it out

// resolveFirstBits
// Find the bitcoin address which resolves to the provided firstbits 
exports.resolveFirstBits = function resolveFirstBits(bits, callback) {
  var apiURL = 'https://blockchain.info/q/resolvefirstbits/' + bits;

  request(apiURL, function(error, response, body) {
    if(!error && response.statusCode == 200) callback(body);
    else callback(null);
  });
}
*/
