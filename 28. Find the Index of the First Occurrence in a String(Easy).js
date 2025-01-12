/* 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, 
    return the index of the first occurrence of needle in haystack, 
         or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1. 
*/

// Solution 1: Using indexOf() method
// Time complexity: O(n)
// Space complexity: O(1)

const findIndex = (haystack, needle) => {
  return haystack.indexOf(needle);
};

//-------------------------------------------------------------------

// Solution 2: Using for loop
// Time complexity: O(n)
// Space complexity: O(1)
var strStr = function (haystack, needle) {
  const hayLen = haystack.length;
  const needleLen = needle.length;

  if (needleLen === 0) return 0; // Edge case: empty needle

  for (let i = 0; i <= hayLen - needleLen; i++) {
    if (haystack.substring(i, i + needleLen) === needle) {
      return i;
    }
  }
  return -1;
};

// Test cases
console.log(findIndex("sadbutsad", "sad")); // 0
console.log(findIndex("leetcode", "leeto")); // -1
console.log(findIndex2("sadbutsad", "sad")); // 0
console.log(findIndex2("leetcode", "leeto")); // -1
