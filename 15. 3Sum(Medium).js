// 15. 3Sum
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0. */

// Solution
function threeSum(nums) {
  const result = [];
  if (nums.length < 3) return result;
  // Step 1: Sort the array
  nums.sort((a, b) => a - b); // O(n log n)

  // Step 2: Iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // If the current number is greater than 0, break. No triplet can sum to zero.
    if (nums[i] > 0) break;

    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Step 3: Two-pointer approach
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Found a triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Move both pointers to avoid duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move pointers after processing duplicates
        left++;
        right--;
      } else if (sum < 0) {
        // If the sum is less than zero, move the left pointer to increase the sum
        left++;
      } else {
        // If the sum is greater than zero, move the right pointer to decrease the sum
        right--;
      }
    }
  }

  return result;
}
// Rough explanation:
// Pointer's places in initial state:
//  1st ptr(i)   2nd ptr(left)                     3rd ptr(right)
// [   -1,           -2,      -3,4, 5, 6, 7, 8, 9,       10]

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
