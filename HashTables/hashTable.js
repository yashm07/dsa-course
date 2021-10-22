class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

// simple hash function O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
      this.data.length
    }
    return hash;
  }
  // O(1) 
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

// most of time O(1), but in collisions O(n)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } 
    return undefined
  }

// some notes: need to loop through all memory space to find keys, items are placed randomly and when retreived they are out of order
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        // checking for collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          } 
        }
        else {
            keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
}


const myHashTable = new HashTable(2);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 100);
myHashTable.set("oranges", 2);
console.log(myHashTable.data.length);
myHashTable.keys();

 //   const keysArray = [];
  //   for (let i = 0; i < this.data.length; i++) {
  //     if(this.data[i]) {
  //       keysArray.push(this.data[i][0][0]);
  //     }
  //   }
  //   return keysArray;
  // }

