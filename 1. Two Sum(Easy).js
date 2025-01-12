// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(array, target) {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(array[i], i);
  }
}

//------------------------------- OR ------------------------------------

function twoSum(array, target) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[array[i]] = i;
  }
}
console.log(twoSum([1, 2, 3], 4));
