function insertInSortedList(node, data) {
  const newNode = new Node(data);
  if (node == null) {
    return newNode;
  }
  let current = head;
  let previous = null;

  while (current && current.data < data) {
    previous = current;
    current = current.next;
  }

  newNode.next = current;
  if (previous) {
    previous.next = newNode;
  } else {
    node = newNode;
  }
  return node;
}
