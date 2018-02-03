'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = waitForever;

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * waits forever
 * @return {Promise}
 */
function waitForever(fun) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

  return new Promise(function (res) {});
}