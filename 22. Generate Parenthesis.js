/* 22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"] 

*/

// Solution

var generateParenthesis = function (n) {
  const result = [];
  let str = "";
  function backtrack(str, open, close) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (open < n) {
      backtrack(str + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(str + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};
console.log(generateParenthesis(3));
