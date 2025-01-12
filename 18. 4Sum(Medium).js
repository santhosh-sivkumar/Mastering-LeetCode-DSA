// 18. 4Sum
/* Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]] */

const fourSum = (nums, target) => {
  const result = [];

  if (nums.length < 4) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    // 1st pointer
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break; // If First four's too large then break.
    if (
      nums[nums.length - 1] +
        nums[nums.length - 2] +
        nums[nums.length - 3] +
        nums[nums.length - 4] <
      target
    )
      break; // If Last four's are too small then break

    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 2nd pointer
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates
      let left = j + 1; // 3rd pointer
      let right = nums.length - 1; // 4th pointer

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]); // Found a quadruplet
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right + 1]) right--; // Skip duplicates
        } else if (sum < target) left++;
        else right--;
      }
    }
  }

  return result;
};

// Rough explanation:
// Pointer's places in initial state:
// 1st ptr(i)   2nd ptr(j)  3rd ptr(left)                     4th ptr(right)
// [   1,           2,           3,        4, 5, 6, 7, 8, 9,       10]

// Time Complexity: O(n^3) - We have three nested loops
// Space Complexity: O(n) - We are using a constant amount of space
