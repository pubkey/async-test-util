"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = waitForever;
/**
 * waits forever
 * @return {Promise}
 */
function waitForever(fun) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

  return new Promise(function (res) {});
}