// elementary sort, O(n^2)
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i< length; i++) {
    let min_idx = i;
    for (let j = i+1; j < length; j++) {
      // find min index
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    // swap with min element
    let temp = array[i];
    array[i] = array[min_idx];
    array[min_idx] = temp;
  }
}