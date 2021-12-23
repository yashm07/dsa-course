const nums = [4, 1, 90, -10, 3, 100];

// Time complexity O(n log n), space complexity O(n)
// stable sorting algorithm, divide and conquer
function mergeSort(array) {
  // base case
  if (array.length === 1) {
    return array;
  }

  // split array down middle
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // return sorted left and right array 
  return merge(mergeSort(left), mergeSort(right));
}

// merge left and right arrays into new sorted array 
function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  // stay in array 
  while (leftIdx < left.length && rightIdx < right.length) {
    // push smaller element to result array
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  // return result plus remaining elements in lists 
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}
