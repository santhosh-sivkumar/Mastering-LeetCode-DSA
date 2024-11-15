// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/* Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

function findMedianSortedArray(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a, b) => a - b);
  const length = array.length;
  if (length % 2 === 0) {
    return (array[length / 2 - 1] + array[length / 2]) / 2;
  } else {
    return array[Math.floor(length / 2)];
  }
}
