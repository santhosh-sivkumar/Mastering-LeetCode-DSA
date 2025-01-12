/* 23. Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: [] */

var mergeKLists = function (lists) {
  const result = [];
  for (let i = 0; i < lists.length; i++) {
    let temp = lists[i];
    while (temp) {
      result.push(temp.val);
      temp = temp.next;
    }
  }
  result.sort((a, b) => a - b);

  return convertToList(result);
};

function convertToList(array) {
  const dummy = { val: 0, next: null };
  let current = dummy;
  for (let val of array) {
    current.next = { val: val, next: null };
    current = current.next;
  }
  return dummy.next;
}

// Rough explanation:
//prev  1st   2nd    3rd     4th
// 0     1     2      3       4

/*  let first = head;
    let second = head.next;

    // Swapping
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // Reinitialize pointers
    prev = first;
    head = first.next; 
*/
