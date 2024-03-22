class FixedSizeArrayStack {
  #capacity;
  #stack;
  #top;

  constructor(capacity) {
    this.#capacity = capacity || 10;
    this.#stack = [];
    this.#top = -1;
  }

  size() {
    return this.#top + 1;
  }

  isEmpty() {
    return this.#top == -1;
  }

  isFull() {
    return this.#top == this.#capacity - 1;
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.#stack[this.#top];
  }

  push(val) {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this.#top++;
    this.#stack[this.#top] = val;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const value = this.top();
    this.#top--;
    return value;
  }
}
