// 21. Merge Two Sorted Lists
/* 
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list. 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/

import { ListNode } from "./src/SourceForLinkedList.js";

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
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
    result.push(current.value);
    current = current.next;
  }
  return result;
}
console.log(linkedListToArray(mergeTwoLists(a, d))); // [1, 2, 3, 4, 4, 5]
