/**
 * Converts string of any Roman number into a digital number.
 * @param {string} s - String of any Roman number
 * @returns {number} Roman number string converted
 *                        into a digital number
 */
function romanToInt(s) {
  const ROMANS = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let num = 0;
  let i = 0;
  while (i < s.length) {
    num +=
      ROMANS[s[i] + s[i + 1]] != undefined
        ? ROMANS[s[++i - 1] + s[i++]]
        : ROMANS[s[i++]];
  }
  return num;
}

module.exports = { romanToInt };
