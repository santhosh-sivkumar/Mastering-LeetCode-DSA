// 5. Longest Palindromic Substring
/* Given a string s, return the longest palindromicsubstring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb" */

function longestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    let even = expandAroundCenter(s, i, i + 1);
    let longer = odd.length > even.length ? odd : even;
    if (longer.length > longest.length) {
      longest = longer;
    }
  }
  return longest;
}
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  left++;
  return s.slice(left, right);
}

console.log(longestPalindrome("abbacdadbbdadg"));
