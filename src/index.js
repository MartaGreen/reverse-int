module.exports = function reverse (n) {
    n = (n < 0) ? -n : n;
    let result = Number(String(n).split('').reverse().join(''));
    return result;
}
