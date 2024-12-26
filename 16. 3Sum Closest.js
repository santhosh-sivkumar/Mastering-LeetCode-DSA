// 16. 3Sum Closest
/* Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0). */

// Solution
function threeSumClosest(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    let closest = -Infinity;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        return sum;
      }
    }
  }
  return closest;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2
