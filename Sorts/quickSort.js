// O(n log n) best case (when partition splits in half every time), O(n^2) worst case (smallest or largest element is pivot)
// different ways to implement quickSort, this is just one way 
function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  // keep dividing list until left >= right, divide and conquer
  if (left < right) {
    // always setting pivot as right
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    // sort left and right arrays
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

// returns partition index 
function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if(array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
