//
function isValid(s) {
  if (s.length % 2 != 0) return false;
  let Br = {
    "(": -1,
    ")": 1,
    "{": -2,
    "}": 2,
    "[": -3,
    "]": 3,
  };
  let A = 0;
  for (let i = 0; i < s.length; i++) {
    A += Br[s[i]];
    console.log(i, s[i], A);
  }
  return true;
}

module.exports = { isValid };
