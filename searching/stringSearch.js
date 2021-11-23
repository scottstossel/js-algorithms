//poor implementation:
//searches individual character to character

function stringSearch(long, short) {
  //loop over longer str
  //loop over shorter str
  //if you complete inner loop, increase count
  //else break out of str

  let count = 0;
  for (i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
  }
}
return count;
}

console.log(stringSearch("lorie loedol no", "lol"));


//proper implementation
