"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = promisify;
var _isPromise = _interopRequireDefault(require("./is-promise"));
/**
 * takes promise or non-promise,
 * returns promise
 * @param  {any} value
 * @return {Promise}
 */
function promisify(value) {
  if ((0, _isPromise["default"])(value)) {
    // is promise
    return value;
  } else {
    // is non-promise
    return Promise.resolve(value);
  }
}