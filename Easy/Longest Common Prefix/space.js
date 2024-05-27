// => 42ms, 48.98mb
function longestCommonPrefix(strs) {
  let F = strs[0],
    i = 1;
  while (i++ < strs.length)
    while (strs[i - 1].indexOf(F) != 0) F = F.substring(0, F.length - 1);
  return F;
}

module.exports = { longestCommonPrefix };
