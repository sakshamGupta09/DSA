import ListNode from "./ListNode.js";

class SinglyLinkedList {
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
    const node = new ListNode(data, this.#head);
    this.#head = node;
    this.#size++;
  }

  insertAtEnd(data) {
    const node = new ListNode(data);
    if (this.#head == null) {
      this.#head = node;
      this.#size++;
      return;
    }
    let current = this.#head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
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
    const newNode = new ListNode(data);

    let previousNode = this.#head;

    for (let i = 1; i < position; i++) {
      previousNode = previousNode.next;
    }

    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.#size++;
  }

  removeFirst() {
    if (this.#head == null) {
      return false;
    }
    const value = this.#head.data;
    this.#head = this.#head.next;
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
      return value;
    }
    let previous = null;
    let current = this.#head;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;

    this.#size--;
    return current.data;
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

    let previousNode = this.#head;

    for (let i = 1; i < position; i++) {
      previousNode = previousNode.next;
    }

    const value = previousNode.next.data;

    previousNode.next = previousNode.next.next;
    this.#size--;

    return value;
  }
}

export default SinglyLinkedList;
