// 19. Remove Nth Node From End of List
/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/
import { ListNode } from "./src/SourceForLinkedList.js";

function removeNthFromEnd(head, n) {
  // Create a dummy node
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  // Return the head of the updated list
  return dummy.next;
}
