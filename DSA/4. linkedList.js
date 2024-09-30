// -------------------------------------------------------------------------------
// III.Linked List:
// -------------------------------------------------------------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// -- 1) Printing values:-------------
// Iterative way:~~~~~~~~~~~
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(a);

// Recursive way:~~~~~~~~~~~
const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};
printLinkedList(a);

// -- 2) Linked list values ( returning values as array)
// Iterative way:~~~~~~~~~~~
const linkedListValues = (head) => {
  const values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
console.log(linkedListValues(a));

// Recursive way:~~~~~~~~~~~
const linkedListValues = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};
function fillValues(head, values) {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
}
console.log(linkedListValues(a));

const num1 = new Node(1);
const num2 = new Node(2);
const num3 = new Node(3);
const num4 = new Node(4);
num1.next = num2;
num2.next = num3;
num3.next = num4;

// -- 3) Sum of the linked list:-------------

// Iterative way:~~~~~~~~~~~
const linkedListSum = (head) => {
  let current = head;
  let sum = 0;
  while (current !== null) {
    sum = sum + current.val;
    current = current.next;
  }
  return sum;
};
console.log(LinkedListSum(num1));

// Recursive Way:~~~~~~~~~~~
const linkedListSum = (head) => {
  if (head === null) return 0;
  return head.val + linkedListSum(head.next);
};
console.log(linkedListSum(num1));

// -- 4) check if value is present in the linked list:-------------
// Iterative way:~~~~~~~~~~~~
const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};
console.log(linkedListFind(a, "A"));

// Recursive way:~~~~~~~~~~~
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};
console.log(linkedListFind(a, "A"));

// -- 5) Get value by index in linked List::-------------
// Iterative way:~~~~~~~~~~~~
const linkedListFGetValueByIndex = (head, target) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === target) return current.val;
    count++;
    current = current.next;
  }
  return null;
};
console.log(linkedListFindIndex(a, 0));

// Recursive way:~~~~~~~~~~~~
const linkedListGetValueByIndex = (head, target) => {
  if (head === null) return null;
  if (target === 0) return head.val;
  return linkedListGetValueByIndex(head.next, --target);
};
console.log(linkedListGetValueByIndex(a, 2));

// -- 6) Reversing linked list:-------------
// Iterative way:~~~~~~~~~~~~
const reverseList = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// Recursive way:~~~~~~~~~~~~~
const reverseList = (head, prev = null) => {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

console.log(reverseList(a));

const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 !== null) tail.next = current1;

  if (current2 !== null) tail.next = current2;

  return JSON.stringify(head1);
};

console.log(zipperList(a, num1));
