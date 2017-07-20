import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import wait from './wait';

export default (function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(predicate) {
        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var t;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                        return wait(interval);

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

    function runForever(_x) {
        return _ref.apply(this, arguments);
    }

    return runForever;
})();