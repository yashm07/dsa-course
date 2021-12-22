// elementary sort, O(n^2)
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length-1; j++) {
      if (array[j] > array[j+1]) {
        // swap numbers in array, "bubble" up
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}