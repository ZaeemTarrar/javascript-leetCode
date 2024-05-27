// => 43ms, 51.02
function twoSum(nums, target) {
  let myMap = [];
  let i = 0;
  while (i < nums.length) {
    if (myMap[nums[i]]) return [i, myMap[nums[i]]];
    myMap[target - nums[i]] = i++;
  }
}

module.exports = { twoSum };
