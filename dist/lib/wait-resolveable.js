"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports["default"] = waitResolveable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * this returns a promise and the resolve-function
 * which can be called to resolve before the timeout has passed
 * @param  {Number}  [ms=0] [description]
 */
function waitResolveable() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var ret = {};
    ret.promise = new _promise2["default"](function (res) {
        ret.resolve = function (x) {
            return res(x);
        };
        setTimeout(res, ms);
    });
    return ret;
}