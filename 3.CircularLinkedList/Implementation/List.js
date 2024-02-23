import ListNode from "./ListNode.js";

class CircularLinkedList {
  #tail;
  #size;

  constructor() {
    this.#tail = null;
    this.#size = 0;
  }

  traverse() {
    if (this.#tail == null) {
      return;
    }
    let current = this.#tail.next;
    let output = ``;
    while (current !== this.#tail) {
      output += `${current.data} -> `;
      current = current.next;
    }
    output += `${this.#tail.data} -> circle `;
    console.log(output);
  }

  addToHead(data) {
    const newNode = new ListNode(data);

    if (this.#tail == null) {
      this.#tail = newNode;
      this.#tail.next = this.#tail;
      this.#size++;
      return;
    }

    newNode.next = this.#tail.next;
    this.#tail.next = newNode;
    this.#size++;
  }

  addToTail(data) {
    this.addToHead(data);
    this.#tail = this.#tail.next;
  }

  removeFromHead() {
    if (this.#tail == null) {
      return false;
    }

    let temp = this.#tail.next;

    if (this.#tail.next == this.#tail) {
      this.#tail = null;
    } else {
      this.#tail.next = this.#tail.next.next;
    }

    this.#size--;
    return temp.data;
  }

  removeFromTail() {
    if (this.#tail == null) {
      return false;
    }
    let removed = this.#tail.data;
    if (this.#tail.next == this.#tail) {
      this.#tail = null;
    } else {
      let current = this.#tail.next;
      while (current.next !== this.#tail) {
        current = current.next;
      }
      current.next = this.#tail.next;
      this.#tail = current;
    }
    this.#size--;
    return removed;
  }
}

export default CircularLinkedList;
