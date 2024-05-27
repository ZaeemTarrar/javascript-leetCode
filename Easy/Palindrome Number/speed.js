// => 98ms, 57mb
function isPalindrome(x) {
  if (x < 0) return false;
  else if (x < 10) return true;
  else {
    let x2 = x,
      rNum = 0;
    do rNum = rNum * 10 + (x % 10);
    while ((x = Math.floor(x / 10)) != 0);
    return x2 == rNum;
  }
}

module.exports = { isPalindrome };
