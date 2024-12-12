// 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
  if (nums.length === 0) return 0; // Edge case: empty array

  let uniqueIndex = 1; // Start from the second element, coz always 1st one is unique

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // Check if current number is different from the previous one
      nums[uniqueIndex] = nums[i]; // Place it at the next unique position
      uniqueIndex++; // Increment the unique position
    }
  }

  return uniqueIndex; // The new length of the array with no duplicates
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
