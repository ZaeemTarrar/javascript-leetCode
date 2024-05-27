# Two Sum

## Description

![description](./../../.github/assets/ss1.png)

## Explanation

## Solution

![solution](./../../.github/assets/code1.png)

```javascript
function twoSum(nums, target) {
  let myMap = [];
  let i = 0;
  while (i < nums.length) {
    if (myMap[nums[i]] != undefined) return [i, myMap[nums[i]]];
    myMap[target - nums[i]] = i++;
  }
  return null;
}
```