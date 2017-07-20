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

exports['default'] = function () {
    var _ref = (0, _asyncToGenerator3['default'])(_regenerator2['default'].mark(function _callee(predicate) {
        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var t;
        return _regenerator2['default'].wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        t = 1; // trick optimizers

                    case 1:
                        if (!(t > 0)) {
                            _context.next = 9;
                            break;
                        }

                        _context.next = 4;
                        return predicate();

                    case 4:
                        _context.next = 6;
                        return (0, _wait2['default'])(interval);

                    case 6:
                        t++;
                        _context.next = 1;
                        break;

                    case 9:
                        return _context.abrupt('return');

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function runForever(_x2) {
        return _ref.apply(this, arguments);
    }

    return runForever;
}();