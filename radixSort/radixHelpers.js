//takes number and position and returns given place value
//getDigit(12345, 0) => 5
//getDigit(12345, 1) => 4
//getDigit(12345, 2) => 3....


const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2));


//take number and return number of digits

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(231312));

//most digits
//given array of numbers, return number of digits in the largest number in the list

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1,22,444,2342394,123,22,3]));