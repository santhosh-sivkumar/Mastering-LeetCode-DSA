// console.log("hi");

// function capitalize(value) {
//   return value
//     .toLowerCase()
//     .split(" ")
//     .map((str) => str[0].toUpperCase() + str.slice(1))
//     .join(" ");
// }

// let value = "santhosh sivakumar";

// console.log(capitalize(value));
// function twoSum(myArray, target) {
//   let result = [];
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = i + 1; j < myArray.length; j++) {
//       let sum = myArray[i] + myArray[j];
//       if (sum === target) {
//         result.push(i, j);
//       }
//     }
//   }
//   return result;
// }

// console.log(twoSum([1, 2, 3, 5, 6], 11));

class MyNode {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}
let a = new MyNode(2);
let b = new MyNode(4);
let c = new MyNode(3);
a.next = b;
b.next = c;
console.log(a);

let d = new MyNode(5);
let e = new MyNode(6);
let f = new MyNode(4);
d.next = e;
e.next = f;
console.log(d);

// function zipperLists(l1, l2) {
//   let tail = l1;
//   let current1 = l1.next;
//   let current2 = l2;
//   let count = 0;
//   while (current1 !== null && current2 !== null) {
//     if (count % 2 == 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;

//   return l1;
// }
// console.log(zipperLists(a, d));

function addTwoNumbers(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let sum = 0;
  let carry = 0;
  let dummy = new MyNode(0);
  console.log(dummy);
  while (current1 !== null && current2 !== null) {
    sum = current1.val + current2.val + carry;
    if (sum >= 10) {
      carry += 1;
      sum = sum % 10;
    }
    dummy.next = new MyNode(sum);
    console.log(sum);
    current1 = current1.next;
    current2 = current2.next;
  }
  console.log(dummy);

  return [a, d];
}
console.log(addTwoNumbers(a, d));
