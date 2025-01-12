/* 9. Palindrome Number
  Given an integer x, return true if x is a 
  palindrome
  , and false otherwise.

  Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.
*/

const isPalindrome = (x) => {
  if (x < 0) return false;
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};

// ------------------------------- OR ---------------------------

const _isPalindrome = (x) => {
  const reversed = parseInt(x.toString().split("").reverse().join(""));
  return reversed === x ? true : false;
};
console.log(_isPalindrome(12321));
