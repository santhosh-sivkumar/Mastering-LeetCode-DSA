// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
/* Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const digitToLetter = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let queue = [""];
  for (let digit of digits) {
    let letters = digitToLetter[digit];
    for (let i = 0; i < queue.length; i++) {
      let combinations = queue.shift();
      for (let letter of letters) {
        queue.push(combinations + letter);
      }
    }
  }
  return queue;
}

console.log(letterCombinations("23"));
