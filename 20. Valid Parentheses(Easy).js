// 20. Valid Parentheses
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
   determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true 
*/

function _validParems(s) {
  const stack = [];
  const valid = "() {} []";
  let i = 0;
  while (i < s.length) {
    stack.push(s[i]);
    i++;
    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    const temp = open + close;

    if (valid.includes(temp)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

//----------------------------------------- Or
const validParentheses = (s) => {
  const stack = [];
  const validMatches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (stack.length === 0 || stack.pop() !== validMatches[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//----------------------------------------- Or

function _validParentheses(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else return false;
  }
  return stack.length === 0;
}
console.log(_validParens("(())"));
