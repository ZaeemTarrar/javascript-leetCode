/*
 * Details:
 *  Best LeetCode Speed: 43ms
 *  Best LeetCode Memory Usage: 51.02mb
 */
function twoSum(nums, target) {
  let myMap = [];
  let i = 0;
  while (i < nums.length) {
    if (myMap[nums[i]] != undefined) return [i, myMap[nums[i]]];
    myMap[target - nums[i]] = i++;
  }
  return null;
}

module.exports = { twoSum };
