"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = runForever;
var _wait = _interopRequireDefault(require("./wait"));
var _promisify = _interopRequireDefault(require("./promisify"));
function runForever(predicate) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var t = 1; // trick optimizers
  return new Promise(function () {
    var runLoop = function runLoop() {
      t++;
      var val = (0, _promisify["default"])(predicate());
      val.then(function () {
        return (0, _wait["default"])(interval);
      }).then(function () {
        return runLoop();
      });
    };
    runLoop(t);
  });
}