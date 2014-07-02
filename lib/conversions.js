/*
 * conversions.js
 *
 * A library to store all unit conversions needed on the site.
 *
 *
 * by Steven Godbold
 * steven.godbold@gmail.com
*/

/* BTC unit conversions */
// Satoshi is the base unit used on the site. Convert from satoshi when needed.
exports.btc2satoshi = function btc2satoshi(val, callbac) {
  callback(val * 100000000);
}

exports.satoshi2btc = function satoshi2btc(val, callback) {
  callback(val * 0.00000001);
}

exports.satoshi2decibtc = function satoshi2decibtc(val, callbac) {
  callback(val * 0.0000001);
}

exports.satoshi2centibtc = function satoshi2centibtc(val, callback) {
  callback(val * 0.000001);
}

exports.satoshi2millibtc = function satoshi2millibtc(val, callback) {
  callback(val * 0.00001);
}

exports.satoshi2microbtc = function satoshi2microbtc(val, callback) {
  callback(val * 0.01);
}

/* Time conversions */
