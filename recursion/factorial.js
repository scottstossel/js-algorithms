// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }



//recursive factorial
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num-1);
}

console.log(factorial(4));