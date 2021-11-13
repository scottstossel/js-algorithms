//given two positive integers, find if both numbers have the same frequency of numbers
//e.g. sameFrequency(182, 281) // true

function sameFrequency(num1, num2) {
  let frequencyCount1 = {};
  let frequencyCount2 = {};
  let str1 = num1.toString();
  let str2 = num2.toString();
  for (let val of str1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
  }
  for (let key in frequencyCount1) {
    if (!(key in frequencyCount2)) {
      return false;
    }
    if (frequencyCount2[key] !== frequencyCount1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(182, 282));