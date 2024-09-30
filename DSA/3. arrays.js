// -------------------------------------------------------------------------------
// II.Arrays:
// -------------------------------------------------------------------------------

const stringArr = ["a", "b", "c", "d", "e"];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, false];
const mixedArr = ["a", 2, true, undefined, null, { a: "a" }, ["b"]];
console.log(mixedArr);

// Custom Array data structure:-------------
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    // if (this.length === 0) return [];
    const firstItem = this.data[0];
    for (let index = 0; index < this.length; index++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
const myNewArray = new MyArray();
myNewArray.push("a");
myNewArray.push("b");
myNewArray.push("c");
console.log(myNewArray);
console.log(myNewArray.deleteByIndex(0));
console.log(myNewArray);

// 1) Reverse String:-------------
let text = "hello";
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString(text));

// 2) Palindrome:-------------
const isPalindrome = (str) => str.split("").reverse().join("") === str;
console.log(isPalindrome("abba"));

// 3) Int reversal:-------------
const reverseInt = (str) =>
  parseInt(str.toString().split("").reverse().join("")) * Math.sign(str);
console.log(reverseInt(-123));

// 4) Sentence Capitalization:-------------
const capitalize = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalize("saNthosh sivakumar"));

// 5) FizzBuzz:-------------
const fizzBuzzFunction = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
};
fizzBuzzFunction(15);

// 6) Chunk Array:-------------
const chunkArray = (array, size) => {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};
console.log(chunkArray([1, 2, 4, 5, 9.5, 6, 4.7, 0], 7));

// 7) Factorial Array:-------------
function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}
console.log(factorial(5));

// 8) Two Sum:-------------
// solution 1)
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}
// solution 2)
function twoSum(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    const sum = target - array[i];
    if (map.get(sum)) {
      return [i, map.get(sum)];
    }
    map.set(array[i], i);
  }
}
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));
