// => 40ms, 48.28mb
function longestCommonPrefix(strs) {
  let F = strs[0],
    i = 1;
  while (i++ < strs.length)
    while (strs[i - 1].indexOf(F) != 0) F = F.slice(0, F.length - 1);
  return F;
}

module.exports = { longestCommonPrefix };
