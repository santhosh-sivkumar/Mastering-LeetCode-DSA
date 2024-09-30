// Given a string s, find the length of the longest
// substring
//  without repeating characters.

var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

//------------------------------- OR ------------------------------------

var lengthOfLongestSubstring = function (s) {
  let charSet = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet[s[right]] !== undefined) {
      delete charSet[s[left]];
      left++;
    }
    charSet[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

//------------------------------- OR ------------------------------------

var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();

  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
