/* 7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 

Example 1:          Example 2:          Example 3:
Input: x = 123      Input: x = -123     Input: x = 120
Output: 321         Output: -321        Output: 21
*/

function reverse(value) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  let reversed = parseInt(
    Math.abs(value).toString().split("").reverse().join("")
  );

  reversed = value < 0 ? -reversed : reversed;

  if (reversed > MAX_INT || reversed < MIN_INT) return 0;
  return reversed;
}
console.log(reverse(-1234));
