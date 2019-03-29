export function oneOfArrayNotInString(stringAr, str) {
    const foundNotInString = stringAr.find(sub => !str.includes(sub));
    if (foundNotInString) return true;
    else return false;
}
