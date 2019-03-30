"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oneOfArrayNotInString = oneOfArrayNotInString;
function oneOfArrayNotInString(stringAr, str) {
    var foundNotInString = stringAr.find(function (sub) {
        return !str.includes(sub);
    });
    if (foundNotInString) return true;else return false;
}