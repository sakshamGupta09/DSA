function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
