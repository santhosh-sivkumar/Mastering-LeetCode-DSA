/*24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]
*/
import { ListNode } from "./src/ListNodeClass.js";
function swapPairs(head) {
  if (!head || !head.next) return head; // Base case: If the list is empty or has one node

  let dummy = new ListNode(0); // Dummy node to simplify edge cases
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    let first = head;
    let second = head.next;

    // Swapping
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // Reinitialize pointers
    prev = first;
    head = first.next;
  }

  return dummy.next;
}
