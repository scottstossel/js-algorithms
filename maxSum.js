//function accepts array of integers and a number. Function should calculate the max sum of n consecutive elements
//in the array

//e.g. maxSubArraySum([1,2,5,2,8,1,5], 2) //10

function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) {
    return null;
  }
  for (i = 0; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));