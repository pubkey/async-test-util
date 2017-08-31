"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = randomNumber;
/**
 * returns a random number
 * @param  {number} [min=0] inclusive
 * @param  {number} [max=1000] inclusive
 * @return {number}
 */
function randomNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}