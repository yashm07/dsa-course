class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    // if doesn't exist set, insert at top
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // traverse through tree
      while(true) {
        // go left if value smaller 
        if(value < currentNode.value) {
          // if doesn't exist, insert here
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // if does exist, shift pointer
          currentNode = currentNode.left;
        } 
        // go right if value larger
        else {  
          // if doesn't exist, insert here
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // if does exist, shift pointer
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    // loop until pointer becomes null
    while(currentNode) {
      // if value less, shift pointer to left node
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } 
      // if value greater, shift pointer to right node
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } 
      // if value equal, return this node
      else if (currentNode.value === value) {
        return currentNode;
      }
    }
    // if value doesn't exist, return false
    return false;
  }
  // remove
}

