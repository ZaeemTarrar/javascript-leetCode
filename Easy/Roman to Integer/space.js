// => 98ms, 53.68mb
function romanToInt(s) {
  const R = {
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
  let fNum = 0;
  let i = 0;
  while (i < s.length) {
    fNum +=
      R[s[i] + s[i + 1]] != undefined ? R[s[++i - 1] + s[i++]] : R[s[i++]];
  }
  return fNum;
}

module.exports = { romanToInt };
