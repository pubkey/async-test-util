import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$keys from "babel-runtime/core-js/object/keys";
import _Promise from "babel-runtime/core-js/promise";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
export default (function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(obj) {
        var _this = this;

        var ret;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        ret = {};
                        _context2.next = 3;
                        return _Promise.all(_Object$keys(obj).map(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(k) {
                                var val;
                                return _regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return obj[k];

                                            case 2:
                                                val = _context.sent;

                                                ret[k] = val;

                                            case 4:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }));

                            return function (_x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 3:
                        return _context2.abrupt("return", ret);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function resolveValues(_x) {
        return _ref.apply(this, arguments);
    }

    return resolveValues;
})();