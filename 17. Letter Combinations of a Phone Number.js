// 17. Letter Combinations of a Phone Number

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
