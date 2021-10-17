// implementing array from scratch 
class MyArray {
  constructor() {
    this.length = 0;
    // special case of arrays in js
    this.data = {};
  }

// simple array methods are O(1), easy to access values
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

// more complicated methods like deleting, which involves index shifting becomes O(n) due to loop through indices
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length -1; i++) {
      // shift items one to left
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("!");
// newArray.push("cool");
// newArray.pop();
// newArray.delete(1)
// console.log(newArray);
// ;

