// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807
//  Input: l1 = [0], l2 = [0]
// Output: [0]
//  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
//  Input: l1 = [], l2 = [9,9]
// Output: [9,9]
//  Input: l1 = [1,2,3], l2 = []
// Output: [1,2,3]
//  Input: l1 = [], l2
import { ListNode } from "./src/ListNodeClass.js";

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0),
    carry = 0,
    current = dummy;

  while (l1 || l2 || carry) {
    let sum = (l1?.value || 0) + (l2?.value || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
}
