class ListNode {
  data;
  next;
  previous;

  constructor(value, next = null, prev = null) {
    this.data = value;
    this.next = next;
    this.previous = prev;
  }
}

export default ListNode;
