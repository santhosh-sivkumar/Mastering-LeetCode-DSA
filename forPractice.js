function convert(s, numRows) {
  // Edge case
  if (numRows <= 1 || numRows >= s.length) {
    return s; // If numRows is 1 or more than length of s, return the original string
  }
  const rows = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;
  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}
console.log(convert("PAYPALISHIRING", 5));
