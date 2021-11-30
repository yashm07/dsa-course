class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      // just add to end
      return this.append(value);
    }
    const newNode = new Node(value);
    // need to get node first before inserting 
    const leader = this.tranverseToIndex(index-1);
    // store pointer
    const holdingPointer = leader.next;
    // set previous pointer to new node address
    leader.next = newNode;
    // point newNode to the stored pointer
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  tranverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter ++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.tranverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    // unwantedNode deleted by garbage collection since nothing points to it
    this.length--;
    return this.printList();
  }

  reverse() {
    // check if there is less than 2 elements
    if (!this.head.next) {
      // return just head
      return this.head;
    }

    let first = this.head;
    // set tail to head since flipping list
    this.tail = this.head;
    let second = first.next;
    
    // transverse through list
    while(second) {
      // third node
      const temp = second.next;
      // second node point to first, flip original pointer
      second.next = first;
      // shift nodes
      first = second;
      second = temp;
    }
    // tail points to null
    this.head.next = null;

    // make new head last element in original list
    this.head = first;
    return this;
  }

  /* Insert and remove O(n) operations due to transversing through list. Append, prepend O(1) 
  */

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(7);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2, 30);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();