//accept base and exponent
//return base to the power of the exponent

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(10, 3));

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(5));

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1,2,3,4]));

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(10));