import ListNode from "./ListNode.js";

class SinglyLinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  traverse() {
    let current = this.#head;
    let output = ``;
    while (current !== null) {
      output += `${current.data} -> `;
      current = current.next;
    }
    output += `NULL`;
    console.log(output);
    console.log(`The size of the list is ${this.#size}`);
  }

  insertStart(value) {
    const newNode = new ListNode(value, this.#head);
    this.#head = newNode;
    this.#size++;
  }

  insertLast(value) {
    const newNode = new ListNode(value);
    if (this.#head == null) {
      this.#head = newNode;
      this.#size++;
      return;
    }
    let lastNode = this.#head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    this.#size++;
  }

  insertAt(position, value) {
    if (position <= 0) {
      return this.insertStart(value);
    }
    if (position >= this.#size) {
      return this.insertLast(value);
    }
    const newNode = new ListNode(value);

    let previous = this.#head;
    for (let i = 1; i < position; i++) {
      previous = previous.next;
    }

    newNode.next = previous.next;
    previous.next = newNode;
    this.#size++;
  }

  deleteFirst() {
    if (this.#head == null) {
      return false;
    }
    const value = this.#head.data;
    this.#head = this.#head.next;
    this.#size--;
    return value;
  }

  deleteLast() {
    if (this.#head == null) {
      return false;
    }
    if (this.#head.next == null) {
      const value = this.#head.data;
      this.#head = null;
      this.#size--;
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

  deleteAt(position) {
    if (this.#head == null) {
      return false;
    }
    if (position <= 0) {
      return this.deleteFirst();
    }
    if (position >= this.#size - 1) {
      return this.deleteLast();
    }
    let previous = this.#head;
    for (let i = 1; i < position; i++) {
      previous = previous.next;
    }
    const returnValue = previous.next.data;
    previous.next = previous.next.next;
    this.#size--;
    return returnValue;
  }
}

export default SinglyLinkedList;
