function isLengthEvenOrOdd(head) {
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
  }
  if (fast == null) {
    return 0;
  }
  return 1;
}
