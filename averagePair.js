//given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target average
//there may be more than one pair that matches

function averagePair(arr, num) {
  if (!arr[0]) {
    return false;
  }

  let targetSum = num * 2;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === targetSum) {
      return true;
    }
    else if (sum > targetSum) {
      j--;
    }
    else {
      i++;
    }
  }
  return false;
}

console.log(averagePair([1,5,6,8,9,10], 4));