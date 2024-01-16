"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = assertThrows;
var _isPromise = _interopRequireDefault(require("./is-promise"));
var _utils = require("./utils");
/**
 * async version of assert.throws
 * @param  {function}  test
 * @param  {Error|TypeError|string} [error=Error] error
 * @param  {?string} [contains=''] contains
 * @return {Promise}       [description]
 */
function assertThrows(test) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Error;
  var contains = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (!Array.isArray(contains)) contains = [contains];
  var shouldErrorName = typeof error === 'string' ? error : error.name;
  var nonThrown = new Error('util.assertThrowsAsync(): Missing rejection' + (error ? ' with ' + error.name : ''));
  var ensureErrorMatches = function ensureErrorMatches(error) {
    // wrong type
    if (error.constructor.name != shouldErrorName) {
      return new Error("\n             util.assertThrowsAsync(): Wrong Error-type\n             - is    : " + error.constructor.name + "\n             - should: " + shouldErrorName + "\n             - error: " + error.toString() + "\n             ");
    }
    // check if contains
    var errorString = error.toString();
    if (contains.length > 0 && (0, _utils.oneOfArrayNotInString)(contains, errorString)) {
      return new Error("\n               util.assertThrowsAsync(): Error does not contain\n               - should contain: " + contains + "\n               - is string: " + error.toString() + "\n             ");
    }
    return false;
  };
  return new Promise(function (res, rej) {
    var val;
    try {
      val = test();
    } catch (err) {
      var wrong = ensureErrorMatches(err);
      if (wrong) rej(wrong);else res(err);
      return;
    }
    if ((0, _isPromise["default"])(val)) {
      val.then(function () {
        // has not thrown
        rej(nonThrown);
      })["catch"](function (err) {
        var wrong = ensureErrorMatches(err);
        if (wrong) rej(wrong);else res(err);
      });
    } else rej(nonThrown);
  });
}