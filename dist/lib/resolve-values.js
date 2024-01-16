"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveValues;
var _promisify = _interopRequireDefault(require("./promisify"));
/**
 * resolves all values if they are promises
 * returns equal object with resolved
 */
function resolveValues(obj) {
  var ret = {};
  return Promise.all(Object.keys(obj).map(function (k) {
    var val = (0, _promisify["default"])(obj[k]);
    return val.then(function (v) {
      return ret[k] = v;
    });
  })).then(function () {
    return ret;
  });
}