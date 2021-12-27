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

  // BFS iterative approach
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    // use queue to store child node stuff
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0) {
      // remove first item from queue and push to list
      currentNode = queue.shift();
      list.push(currentNode.value);
      // if left exists, push to queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      // if right exists, push to queue
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  // BFS recursive approach
  breadthFirstSearchRecursive(queue, list) {
    // base case
    if (queue.length === 0) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  // 3 different ways to implement DFT, only difference is in order
  DFTPreOrder(node, list) {
    list.push(node.value);
    if(node.left) {
      this.DFTPreOrder(node.left, list);
    }
    if(node.right) {
      this.DFTPreOrder(node.right, list);
    }
    return list;
  }

  DFTPostOrder(node, list) {
    if(node.left) {
      this.DFTPostOrder(node.left, list);
    }
    if(node.right) {
      this.DFTPostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }

  DFTInOrder(node, list) {
    if(node.left) {
      this.DFTInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right) {
      this.DFTInOrder(node.right, list);
    }
    return list;
  }
}
