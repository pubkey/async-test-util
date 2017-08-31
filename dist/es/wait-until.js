import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import wait from './wait';

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
export default (function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(fun) {
        var _this = this;

        var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        var timedOut, ok;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        timedOut = false;
                        ok = false;


                        if (timeout !== 0) {
                            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                                return _regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return wait(timeout);

                                            case 2:
                                                timedOut = true;

                                            case 3:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }))();
                        }

                    case 3:
                        if (ok) {
                            _context2.next = 13;
                            break;
                        }

                        if (!timedOut) {
                            _context2.next = 6;
                            break;
                        }

                        throw new Error('AsyncTestUtil.waitUntil(): reached timeout of ' + timeout + 'ms');

                    case 6:
                        _context2.next = 8;
                        return wait(interval);

                    case 8:
                        _context2.next = 10;
                        return fun();

                    case 10:
                        ok = _context2.sent;
                        _context2.next = 3;
                        break;

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function waitUntil(_x) {
        return _ref.apply(this, arguments);
    }

    return waitUntil;
})();