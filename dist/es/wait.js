import _regeneratorRuntime from "babel-runtime/regenerator";
import _Promise from "babel-runtime/core-js/promise";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
/**
 * [promiseWait description]
 * @param  {Number}  [ms=0] time in ms
 * @return {Promise}
 */
export default (function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _Promise(function (res) {
              return setTimeout(res, ms);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function wait() {
    return _ref.apply(this, arguments);
  }

  return wait;
})();