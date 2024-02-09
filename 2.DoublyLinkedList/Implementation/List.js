import ListNode from "./ListNode.js";

class DoublyLinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  traverse() {
    if (this.#head == null) {
      return;
    }
    let current = this.#head;
    let output = ``;
    while (current !== null) {
      output += ` ${current.data} ->`;
      current = current.next;
    }
    output += ` NULL`;
    console.log(output);
  }

  insertAtBegin(data) {
    const node = new ListNode(data, this.#head, null);
    if (this.#head !== null) {
      this.#head.previous = node;
    }
    this.#head = node;
    this.#size++;
  }

  insertAtEnd(data) {
    const newNode = new ListNode(data, null, null);
    if (this.#head == null) {
      this.#head = newNode;
      this.#size++;
      return;
    }
    let lastNode = this.#head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    newNode.previous = lastNode;
    lastNode.next = newNode;
    this.#size++;
  }

  insertAt(position, data) {
    if (position < 0) {
      position = 0;
    }
    if (position > this.#size) {
      position = this.#size;
    }
    if (position == 0) {
      return this.insertAtBegin(data);
    }
    if (position == this.#size) {
      return this.insertAtEnd(data);
    }
    let previous = this.#head;
    for (let i = 1; i < position; i++) {
      previous = previous.next;
    }

    const newNode = new ListNode(data, previous.next, previous);
    previous.next.previous = newNode;
    previous.next = newNode;
    this.#size++;
  }

  removeFirst() {
    if (this.#head == null) {
      return false;
    }
    const value = this.#head.data;
    this.#head = this.#head.next;
    if (this.#head !== null) {
      this.#head.previous = null;
    }
    this.#size--;
    return value;
  }

  removeLast() {
    if (this.#head == null) {
      return false;
    }
    if (this.#head.next == null) {
      const value = this.#head.data;
      this.#head = null;
      this.#size--;
      return value;
    }
    let lastNode = this.#head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.previous.next = null;
    this.#size--;
    return lastNode.data;
  }

  removeAt(position) {
    if (this.#head == null) {
      return false;
    }

    if (position < 0) {
      position = 0;
    }
    if (position >= this.#size) {
      position = this.#size - 1;
    }

    if (position == 0) {
      return this.removeFirst();
    }
    if (position == this.#size - 1) {
      return this.removeLast();
    }

    let nodeToDelete = this.#head;
    for (let i = 0; i < position; i++) {
      nodeToDelete = nodeToDelete.next;
    }
    nodeToDelete.previous.next = nodeToDelete.next;
    nodeToDelete.next.previous = nodeToDelete.previous;

    this.#size--;
    return nodeToDelete.data;

    return value;
  }
}

export default DoublyLinkedList;
