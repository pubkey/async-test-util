export function oneOfArrayNotInString(stringAr, str) {
    var foundNotInString = stringAr.find(function (sub) {
        return !str.includes(sub);
    });
    if (foundNotInString) return true;else return false;
}