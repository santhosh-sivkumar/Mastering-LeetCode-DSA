// 14. Longest common prefix
/* Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// Approach
// #To handle the edge case, return empty string is the array length is 0.
// #Sor the array. by doing this the largest and the smallest strings are at the two ends of the array.
// #Create an variable to hold the first string from the sorted array.
// #Create another variable to hold the last string from the sorted array.
// #Create a variable for the iterator. using this we get the substring.
// #Compare every character of these two strings using an Iteration.
// #Return the substring.

const longestCommonPrefix = (stringArray) => {
  if (!stringArray.length) return "";

  stringArray.sort();

  const first = stringArray[0];
  const last = stringArray[stringArray.length - 1];
  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
