/*  PROBLEM 1:
    Create an array with 5 students names, after that creates a function which takes 2 parameters
    (allStudents & studentName) iterate over all students and find that specific user "studentName".*/

// const studentsDatabase = ["jordan", "erick", "john", "arnold"];

// function findStudent(allStudents, studentName) {
//   for (let index = 0; index < allStudents.length; index++) {
//     if (allStudents[index] === studentName)
//       console.log(` Found ${studentName}`);
//   }
// }
// findStudent(studentsDatabase, "erick");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(3);
let b = new Node(4);
let c = new Node(5);
a.next = b;
b.next = c;
let d = new Node(6);
let e = new Node(7);
let f = new Node(8);
d.next = e;
e.next = f;

console.log(a);
console.log(d);
console.log(Math.floor(13 / 10));

function addTwoNumbers(l1, l2) {
  let carry = 0;
  let dummy = new Node(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry > 0) {
    current.next = new Node(carry);
  }
  return JSON.stringify(dummy.next);
}
console.log(addTwoNumbers(a, d));
