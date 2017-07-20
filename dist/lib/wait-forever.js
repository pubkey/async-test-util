'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * waits forever
 * @return {Promise}
 */
exports['default'] = function () {
  var _ref = (0, _asyncToGenerator3['default'])(_regenerator2['default'].mark(function _callee(fun) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    return _regenerator2['default'].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _promise2['default'](function (res) {}));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function waitForever(_x3) {
    return _ref.apply(this, arguments);
  }

  return waitForever;
}();