import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Promise from 'babel-runtime/core-js/promise';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import wait from './wait';

/**
 * waits forever
 * @return {Promise}
 */
export default (function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(fun) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _Promise(function (res) {}));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function waitForever(_x) {
    return _ref.apply(this, arguments);
  }

  return waitForever;
})();