//function that accepts sorted array and counts the unique values in the array
//can contain negatives but it will always be sorted
//e.g. [1,1,1,1,1,1,2] => 2

//use array to store unique values
function countUniqueValues(arr) {
  if (!arr[0]) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
  }
}
return i + 1;
}

console.log(countUniqueValues([1,1,1,1,2,2,2,3,4,5,6,7]));