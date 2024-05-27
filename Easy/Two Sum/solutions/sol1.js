/**
 * Returns back an array with a pair of numbers,
 * the sum of which is equal to the given target
 * @param {array<number>} nums
 * @param {number} target
 * @returns {array<number>}
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
