"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wait;
var _utils = require("./utils");
/**
 * [promiseWait description]
 * @param  {Number}  [ms=0] time in ms
 * @return {Promise}
 */
function wait() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (res) {
    return setTimeout(res, (0, _utils.ensureInSetTimeoutLimit)(ms));
  });
}