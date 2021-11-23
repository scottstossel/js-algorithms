function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  // console.log(start, middle, end);
  if (arr[middle] == val) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([0,1,2,3,5,8,12,15,20,23,25,40], 13));