function mergeTwoLists(list1, list2) {
  let head = new ListNode(0);
  let current = head;

  while (list1 && list2) {
    if (list1.data < list2.data) {
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

  return head.next;
}
