/**
 * returns a random number
 * @param  {number} [min=0] inclusive
 * @param  {number} [max=1000] inclusive
 * @return {number}
 */
export default function randomNumber(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
