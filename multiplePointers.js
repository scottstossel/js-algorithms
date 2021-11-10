//function that accepts a sorted array of integers and finds first pair where sum = 0
//returns array that includes both values that sum to zero or undefined

//e.g. sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]

// function sumZero(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
//works but poor efficiency
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
//only one loop so O(n) time complexity
console.log(sumZero([-4,-3,-2,-1,0,5,10]));