"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = randomBoolean;
/**
 * returns a random boolean
 * @link https://stackoverflow.com/a/36756480
 */
function randomBoolean() {
  return Math.random() >= 0.5;
}