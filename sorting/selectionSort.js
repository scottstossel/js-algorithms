//store 1st element as the smallest value
//compare this item to next item until you find a smaller number
//if smaller number, designate the smaller number to
//be the new "minimum" and continue unil the end
//if the "minimum" is not the value(index)
//you initially started with, swap the two values
//repeat this with next element until arr is sorted

const selectSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

//ES2015
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      } 
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectSort([34,22,10,19,17]));