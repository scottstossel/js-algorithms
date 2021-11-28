//start by picking 2nd element
//compare element w/ the one before
//swap if necessary
//continue to the next element
//iterate through sorted portion and correctly place element
//repeat until arr is sorted

const insertionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
