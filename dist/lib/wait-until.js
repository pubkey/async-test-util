'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * waits until the given function returns true
 * @param  {function}  fun
 * @return {Promise}
 */
exports['default'] = function () {
    var _ref = (0, _asyncToGenerator3['default'])(_regenerator2['default'].mark(function _callee2(fun) {
        var _this = this;

        var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        var timedOut, ok;
        return _regenerator2['default'].wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        timedOut = false;
                        ok = false;


                        if (timeout !== 0) {
                            (0, _asyncToGenerator3['default'])(_regenerator2['default'].mark(function _callee() {
                                return _regenerator2['default'].wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return (0, _wait2['default'])(timeout);

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
                        return (0, _wait2['default'])(interval);

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

    function waitUntil(_x3) {
        return _ref.apply(this, arguments);
    }

    return waitUntil;
}();