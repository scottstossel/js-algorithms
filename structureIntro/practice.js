class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b){return a + b;});
    return sum/this.scores.length;
  }

  static enrollStudents(...students){
    return "enrolling students"
  }
}

let firstStudent = new Student("Bill", "Nye", 4);
let secondStudent = new Student("Red", "Blue", 3);

console.log(Student.enrollStudents())