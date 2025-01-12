/* 8. String to Integer (atoi)
The algorithm for myAtoi(string s) is as follows:
1. Whitespace: Ignore any leading whitespace (" ").
2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. 
    If no digits were read, then the result is 0.
4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
    Return the integer as the final result. */

const atoiFunction = (s) => {
  const ans = Number.parseInt(s);
  if (!isNaN(ans)) {
    if (ans <= -2147483648) return -2147483648;
    else if (ans >= 2147483647) return 2147483647;
    else return ans;
  }
  return 0;
};
// ---------------------------------- OR ----------------------------
const atoiFunction = (str) => {
  let result = "";
  let i = 0;
  let sign = 1;
  let maxInt = 2 ** 31 - 1;
  let minInt = -(2 ** 31);
  while (str[i] === " ") {
    i++;
  }
  if (i > str.length) return 0;
  if (str[i] === "-") {
    sign = -1;
    i++;
  } else if (str[i] === "+") {
    i++;
  }
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    result = result * 10 + str[i].charCodeAt(0) - "0".charCodeAt(0);
    i++;
  }
  result *= sign;
  if (result > maxInt) return maxInt;
  if (result < minInt) return minInt;

  return result;
};

console.log(atoiFunction(" 214748364"));
