"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPromise;
/**
 * returns true if promise is given
 */
function isPromise(value) {
  if (typeof value !== 'undefined' && typeof value.then === 'function') {
    return true;
  }
  return false;
}