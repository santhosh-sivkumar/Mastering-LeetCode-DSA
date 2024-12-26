// 13. Roman to Integer
/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
For example, 
// 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. 
// 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

// Approach --------------------
// #Create a dictionary/map/hashmap to hold the key value pairs of numbers and symbols.
// #Create a pointer starting at the end of the string.
// #Create variable "answer" and initialize its value with the pointer value.
// #Iterate through the string going backwards.
// #If the previous numeral is less than the current, subtract it from the answer.
// #If the previous numeral is greater then or equal to the current, add it's value to the answer.
// #Ensure that the pointer moves backward once every iteration.
// #When the pointer reaches the beginning of the string, return the answer.

const _romanToInt = (symbols) => {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 100);
  map.set("M", 1000);

  let pointer = symbols.length - 1;
  let answer = map.get(symbols[pointer]);

  while (pointer > 0) {
    if (map.get(symbols[pointer - 1]) < map.get(symbols[pointer])) {
      answer -= map.get(symbols[pointer - 1]);
    } else {
      answer += map.get(symbols[pointer - 1]);
    }
    pointer--;
  }
  return answer;
};

// -------------------------------------------- or ---------------------------------------------

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (next && current < next) {
      result -= current; // Subtractive notation
    } else {
      result += current; // Regular addition
    }
  }

  return result;
}

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
