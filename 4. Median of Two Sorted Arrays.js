// 4. Median of Two Sorted Arrays
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//The overall run time complexity should be O(log (m+n)).

function findMedianSortedArray(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a, b) => a - b);
  const length = array.length;
  if (length % 2 === 0) {
    return (array[length / 2 - 1] + array[length / 2]) / 2;
  } else {
    return array[Math.floor(length / 2)];
  }
}
