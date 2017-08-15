function ConstructorFunc(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

// constructor functions using its instances of contrcutor functions that would be shared by all the instances
// one obj of the value change for all obj
ConstructorFunc.prototype.breed = "Homo Sapients";

let john = new ConstructorFunc('john', 20, 'arch');
let emily = new ConstructorFunc('emily', 18, 'lee');
let katie = new ConstructorFunc('katie', 30, 'seth');

console.log(john.constructor);
// output:
// function ConstructorFunc(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

console.log(john.breed);
john._proto_.breed = "Some thing Else"; // chan

console.log(john.name);
console.log(john.age);
console.log(john.job);

