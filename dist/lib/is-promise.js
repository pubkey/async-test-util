'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isPromise;
/**
 * returns true if promise is given
 */
function isPromise(value) {
  return typeof value.then === 'function';
}