// 13. Roman to Integer

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
