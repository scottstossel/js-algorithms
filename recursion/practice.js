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

// console.log(recursiveRange(10));

//accept a number and return nth number 
//in the Fibonacci sequence
//1,1,2,3,5,8,13,21,34
//nth num = (n - 1) + (n - 2)

function fib(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num-1) + fib(num-2);
}

// console.log(fib(20));

//function accepts str and returns it in reverse

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse(`popcorn`));