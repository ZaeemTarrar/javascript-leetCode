/**
 * Returns back an array with a pair of numbers,
 * the sum of which is equal to the given target
 * @param {array<number>} nums
 * @param {number} target
 * @returns {array<number>}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
}

module.exports = { twoSum };
