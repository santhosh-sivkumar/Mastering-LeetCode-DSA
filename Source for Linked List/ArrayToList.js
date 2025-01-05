function arrayToList(arr) {
  let dummy = { val: 0, next: null }; // Dummy node
  let current = dummy;

  for (let value of arr) {
    current.next = { val: value, next: null };
    current = current.next;
  }

  return dummy.next; // Return the actual head
}
