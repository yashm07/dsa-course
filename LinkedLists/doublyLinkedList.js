class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    // prev pointer in newnode points to original tail value
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    // the old head prev points to newNode
    this.head.prev = newNode;
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
    const follower = leader.next;
    // set previous pointer to new node address
    leader.next = newNode;
    // point newNode backwards to previous node
    newNode.prev = leader;
    // point follower prev to newNode
    follower.prev = newNode;
    // point newNode to the stored pointer
    newNode.next = follower;
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
    // access leader before index, to remove current index
    const leader = this.tranverseToIndex(index-1);
    // access node to delete
    const unwantedNode = leader.next;
    // access follower
    const follower = unwantedNode.next;
    // point leader to follower, skipping unwantedNode
    leader.next = follower;
    // point follower prev to leader, skipping unwantedNode
    follower.prev = leader;

    // unwantedNode deleted by garbage collection since nothing points to it
    this.length--;
    return this.printList();
  }

  /* Insert and remove O(n) operations due to transversing through list. Append, prepend O(1) 
  */

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(7);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2, 30);
myLinkedList.printList();
myLinkedList.remove(2);