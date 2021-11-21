//take in two strings and check whether the characters in the first string
//form a subsequence of the characters in the second string

//e.g. isSubsequence('hello', 'hello world') //true

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('abc', 'acb'));