# Two Sum

## Description

<div align="center" >
<img style="width:50%;" src="./../../.github/assets/ss1.png" />
</div>

## Explanation

## Solution

**Solution-1:**

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

**Solution-2:**

```javascript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
}
```