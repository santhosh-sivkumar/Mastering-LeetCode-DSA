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
  get(item) {
    console.log(this.data);
    return this.data[item];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    let firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
const arr = new MyArray();
console.log(arr);

//---push
arr.push("cake");
arr.push("bread");
arr.push("milk");
arr.push("chocolate");
console.log(arr);

//---get
console.log(arr.get(1));

//---pop
console.log(arr.pop());

//---shift
//console.log(arr);
//arr.shift();
//console.log(arr);

//deleteByIndex
// console.log(arr.deleteByIndex(0));
console.log(arr);

let arr_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21];

// console.log(arr_.shift());

// function factorial(n) {
//   var res = 1,
//     i;
//   for (i = 1; i <= n; i++) res *= i;
//   return res;
// }
// console.log(factorial(0));

// function reverse(params) {
//   let reversed = params.toString().split("").reverse().join("");
//   return Number(reversed);
// }
// console.log(reverse(234567890));

// function capitalize(params) {
//   return params
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalize("santhosh sivakumar"));

function chunkArray(arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
}

console.log(chunkArray(arr_, 2));
