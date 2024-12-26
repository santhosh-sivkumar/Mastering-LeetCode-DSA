class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const a = new ListNode(1);
const b = new ListNode(3);
const c = new ListNode(3);
a.next = b;
b.next = c;

const d = new ListNode(2);
const e = new ListNode(4);
const f = new ListNode(5);
d.next = e;
e.next = f;

export { ListNode, a, d };
