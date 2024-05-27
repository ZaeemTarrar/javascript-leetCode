// => 47ms, 49.38mb
function isValid(s) {
  if (s.length % 2 != 0) return false;
  let X = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") X.push(s[i]);
    else if (
      X.length != 0 &&
      ((s[i] == ")" && X[X.length - 1] == "(") ||
        (s[i] == "}" && X[X.length - 1] == "{") ||
        (s[i] == "]" && X[X.length - 1] == "["))
    )
      X.pop();
    else return false;
  }
  return X.length == 0;
}

module.exports = { isValid };
