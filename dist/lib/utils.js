"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIMEOUT_MIN = exports.TIMEOUT_MAX = void 0;
exports.ensureInSetTimeoutLimit = ensureInSetTimeoutLimit;
exports.oneOfArrayNotInString = oneOfArrayNotInString;
function oneOfArrayNotInString(stringAr, str) {
  var foundNotInString = stringAr.find(function (sub) {
    return !str.includes(sub);
  });
  if (foundNotInString) return true;else return false;
}
var TIMEOUT_MAX = exports.TIMEOUT_MAX = 2147483647;
var TIMEOUT_MIN = exports.TIMEOUT_MIN = 0;

/**
 * @link https://mrcoles.com/maximum-delay-settimeout/
 */
function ensureInSetTimeoutLimit(timeoutInMilliseconds) {
  if (timeoutInMilliseconds > TIMEOUT_MAX) {
    throw new Error('setTimeout cannot be called with time greater than ' + TIMEOUT_MAX);
  }
  if (timeoutInMilliseconds < TIMEOUT_MIN) {
    throw new Error('setTimeout cannot be called with time lower than ' + TIMEOUT_MIN);
  }
  return timeoutInMilliseconds;
}