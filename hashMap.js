//aka hash tables they store key-value pairs
//like arrays but the keys aren't ordered
//fast for finding values, adding new values, and removing values

//convert keys into valid array indices

//hash functions 

//good hash are:
//fast (constant time), doesn't cluster outputs at specific indices
//distributes uniformly
//Deterministic (same input yields same output)

//simple example

// "a".charCodeAt(0);
// "hi".charCodeAt(1);

// let total = 0;
// total += "hello".charCodeAt(0) - 96;
// total += "hello".charCodeAt(1) - 96;

//works for strings only
// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     //map "a" to 1, "b" to 2, "c" to 3, etc.
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// console.log(hash("pink", 10));
// console.log(hash("orange", 10));
// console.log(hash("maroon", 10));

//problems: only hashes strings, not constant time -- linear in key length, could be more random

// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total + WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

// console.log(hash("pink", 10));
// console.log(hash("orange", 10));
// console.log(hash("maroon", 10));
// console.log(hash("maroon", 10));
// console.log(hash("hello", 13));
// console.log(hash("goodbye", 13));
// console.log(hash("hi", 13));
// console.log(hash("cyan", 13));
// console.log(hash("blue", 13));
// console.log(hash("hola", 13));

//collisions: even with a large array and a great hash function, they're inevitable 
//seperate chaining and linear probing

//Seperate Chaining:
//At each index in our arr, we store values using a more sophisticated data structure (e.g arr or linked list)

//Linear Probing:
//When we find a collision, we search through the arr to find next empty spot

class HashTable {
  constructor(size=4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);

console.log(ht.set("hello world", "goodbye!!"));
console.log(ht.set("dogs", "are cool"));
console.log(ht.set("pizza", "yum"));
console.log(ht.set("cats", "purrrr"));
console.log(ht.set("but", "wait"));
console.log(ht.set("hello", "there"));
// console.log(ht.get("pizza"));
// console.log(ht.get("but"));
// console.log(ht.get("help"));
console.log(ht.set("are we done", "yes"));
ht.set('bruh', 'skull emoji');
ht.set('no', 'you');
ht.set('node', 'version');
ht.set('react', 'JavaScript');
ht.set('react', 'TypeScript');
// console.log(ht.get("are we done"));

console.log(ht.values());