// elementary sort, O(n^2), (O(n) when almost sorted)
function insertionSort(array) {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
      // swap if value less than previous value
      temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
    }
  }
}