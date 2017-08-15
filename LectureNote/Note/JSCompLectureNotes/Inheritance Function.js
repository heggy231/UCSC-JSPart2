function Person ( name, age ){
    this.name = name;
    this.age = age;
}

// any variable gets the prototype even though it is before
// let john = new Person

// Person constructor now inherites .calculate Age
Person.prototype.calculateAge = function () {
    return 2017 - this.age;
}

function PoliceMan (name, age, gender, interest) {
    // there is a function call it with 'this'
    Person.call(this, name, age);
}

// it is set to Person
PoliceMan.prototype = Object.create(Person.prototype);
// resets to PoliceMan best practice
PoliceMan.prototype.constructor = PoliceMan;
PoliceMan.prototype.whoAmI = function () {
    console.log("I am " + this.name);
};

function Sherrif( name, age, gender, interest, duties) {
    PoliceMan.call(this, name, age, gender, interest);
    this.duties = duties;
}

Sherrif.prototype = Object.create(PoliceMan.prototype);
Sherrif.prototype.constructor = Sherrif;
let john = new Sherrif( "John", 1984, "M", ["Lakers", "Raiders"],
    ['patrolling', 'giving tickets', 'keeping safe']);

// PoliceMan.prototype = new Person();
// // we are changing
// // PoliceMan.prototype = Object.create(Person.prototype);
//
// //
// PoliceMan.constructor = PoliceMan;
//
// console.log(PoliceMan.prototype.constructor);