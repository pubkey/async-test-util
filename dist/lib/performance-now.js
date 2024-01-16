"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = performanceNow;
var _isNode = _interopRequireDefault(require("is-node"));
var _requireOnNodeOnly = _interopRequireDefault(require("./require-on-node-only"));
/**
 * same as performance.now()
 * but works in browsers and nodeJs
 * @link https://developer.mozilla.org/de/docs/Web/API/Performance/now
 */
function performanceNow() {
  var perf;
  if (_isNode["default"]) {
    var performance = _requireOnNodeOnly["default"].perfHooks.performance;
    perf = performance;
  } else perf = window.performance;
  return perf.now();
}