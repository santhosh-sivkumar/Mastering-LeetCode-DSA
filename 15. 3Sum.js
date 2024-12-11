// 15. 3Sum

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

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
