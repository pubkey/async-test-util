import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
/**
 * async version of assert.throws
 * @param  {function}  test
 * @param  {Error|TypeError|string} [error=Error] error
 * @param  {?string} [contains=''] contains
 * @return {Promise}       [description]
 */
export default (function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(test) {
        var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Error;
        var contains = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var shouldErrorName;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        shouldErrorName = typeof error === 'string' ? error : error.name;
                        _context.prev = 1;
                        _context.next = 4;
                        return test();

                    case 4:
                        _context.next = 13;
                        break;

                    case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](1);

                        if (!(_context.t0.constructor.name != shouldErrorName)) {
                            _context.next = 10;
                            break;
                        }

                        throw new Error('\n             util.assertThrowsAsync(): Wrong Error-type\n             - is    : ' + _context.t0.constructor.name + '\n             - should: ' + shouldErrorName + '\n             - error: ' + _context.t0.toString() + '\n             ');

                    case 10:
                        if (!(contains != '' && !_context.t0.toString().includes(contains))) {
                            _context.next = 12;
                            break;
                        }

                        throw new Error('\n               util.assertThrowsAsync(): Error does not contain\n               - should contain: ' + contains + '\n               - is string: ' + _context.t0.toString() + '\n             ');

                    case 12:
                        return _context.abrupt('return', 'util.assertThrowsAsync(): everything is fine');

                    case 13:
                        throw new Error('util.assertThrowsAsync(): Missing rejection' + (error ? ' with ' + error.name : ''));

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 6]]);
    }));

    function assertThrows(_x) {
        return _ref.apply(this, arguments);
    }

    return assertThrows;
})();