class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// using linked list approach
class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // access top value 
  peek(){
    return this.top;
  }

  // push value to top
  push(value) {
    const newNode = new Node(value);
    // if there is no elements, set top and bottom
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } 
    else {
      // store top node
      const holdingPtr = this.top;
      // point top to newNode
      this.top = newNode;
      // point newNode to old top
      this.top.next = holdingPtr;
      // if linked list was other way
      // this.top.next = newNode;
      // this.top = newNode;
    }
    this.length++;
    return this;
  }

  // delete top value
  pop() {
    if (!this.top) {
      return null;
    }
    // reassign bottom node if deleting last node
    if (this.length === 1) {
      this.bottom = null;
    }
    // garbage collection automatically gets rid of top node when there is no reference to it
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// using array approach
class ArrayStack {
  constructor() {
    this.array = [];
  }

  // access top value 
  peek(){
    return this.array[this.array.length - 1];
  }
  
  // push value to top
  push(value) {
    this.array.push(value);
    return this;
  }

  // delete top value
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new ArrayStack();
myStack.push("apples");
myStack.push("bananas");
myStack.push("oranges");
myStack.pop();
myStack.pop();
myStack.pop();
// myStack.peek()