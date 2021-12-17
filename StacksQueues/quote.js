class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// using linked list 
class LinkedListQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // FIFO
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

// implement queue using two stacks
class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  
  // using last stack to deal with push
  enqueue(value) {
    // move elements from first to last
    for (let i = 0; i < this.first.length; i++) {
      this.last.push(this.first.pop());
    }
    // add value to top
    this.last.push(value);
    return this;
  }

  // using first stack to deal with pop 
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    // check which stack elements are in
    if (this.last.length > 0) {
      // since last used for pushing, return first element
      return this.last[0];
    }
    // since first used for popping, return last element
    return this.first[this.first.length - 1];
  }
}

const myQueue = new StackQueue();
myQueue.enqueue("apples");
myQueue.enqueue("oranges");
myQueue.enqueue("bananas");
myQueue.dequeue();
myQueue.peek();