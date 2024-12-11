// 21. Merge Two Sorted Lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(3);
const c = new Node(3);
const d = new Node(2);
const e = new Node(4);
const f = new Node(5);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

// Use only this part of code for LeetCode --------------------------------
var mergeTwoLists = function (list1, list2) {
  let dummy = new Node(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }
  return dummy.next;
};

// --------------------------------------------------------------

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
console.log(linkedListToArray(mergeTwoLists(a, d))); // [1, 2, 3, 4, 4, 5]
