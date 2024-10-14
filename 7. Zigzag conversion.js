/* 6. Zigzag Conversion
Write the code that will take a string and make this zigzag conversion based on a given number of rows.

Example 1:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
*/

function convert(str, numRows) {
  if (numRows <= 1 || numRows >= str.length) return 0;

  let rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;
  for (const char of str) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 4));
