// ['banana', 'apple', 'orange', 'mango','papaya','jackfruit','mango','kiwi','apple']

function getUniqueAndSortedByLength(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isExists = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isExists = true;
        break;
      }
    }
    if (!isExists) uniqueArray.push(array[i]);
  }

  for (let _index = 0; _index < uniqueArray.length; _index++) {
    for (let index = 0; index < uniqueArray.length; index++) {
      if (uniqueArray[_index].length > uniqueArray[index].length) {
        let temp = uniqueArray[_index];
        uniqueArray[_index] = uniqueArray[index];
        uniqueArray[index] = temp;
      }
    }
  }

  //   let uniqueArray = [...new Set(array)].sort((x, y) => y.length - x.length);

  console.log(uniqueArray);
}

const array = [
  "banana",
  "apple",
  "orange",
  "mango",
  "papaya",
  "jackfruit",
  "mango",
  "kiwi",
  "apple",
];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === "kiwi") console.log(element);
}
console.log(array.push((v) => v == "something"));
console.log(array);
getUniqueAndSortedByLength(array);

var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }
    map.set(s[right], right);
    console.log(map);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

var lengthOfLongestSubstring = function (s) {
  let charSet = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet[s[right]] !== undefined) {
      delete charSet[s[left]];
      left++;
    }
    charSet[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();

  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
console.log(lengthOfLongestSubstring("abcdabcds"));
