Date: 7/31

How many ways to create Obj:
1. Constructor function  >> Inheritance requ/ mult. obj needed with sam blueprint
2. obj literal >> Simple Obj definition created on the fly
3. Factory Pattern >> Messaging needs to be done before creating the obj.
4. Obj constructor >> Simple Obj def. created on the fly
  - var obj = new Object();
5. Obj create >> Usu. for the inheritance purposes

---
Obj create demo - directly points to the object
obj constructor - instances points to the prototype
(refer to his slides he will share at the end of the class using python tutor)

let personProto = {
    calculateAge: function () {
        return 2017 - this.dob;
    }
}

let john = Object.create(personProto);

john.name = "John";
john.dob = 1985;
john.job = "Software Arch";

console.log(john.calculateAge());


Private int sum (int a, int b) {
  int result = 
}

- class 

class Person {
    constructor() {
        this.planet = "Earth";
    }
    greeting() {
        console.log("Hi I\'m " + this.name.firstName + ", " + " And I live on " + this.planet + "with a badge number " +
        this.badgeNum)
    }
}

class PoliceMan extends Person {
    constructor(firstName, lastName, age, badgeNum) {
        super();
        this.name = {
            firstName,
            lastName
        };
        this.age = age;
        this.badgeNum = badgeNum;
    }
    duties(){
        console.log("I am " + this.age + "years old and I work as a " + this.title);
    }
}

class Sherrif extends PoliceMan{
    constructor(firstName, lastName, age, badgeNum, title){
        super(firstName, lastName, age, badgeNum, title);
        this.title = title;
    }
}

let John = new Sherrif ("John", "Doe", 35, 12345, "Sherrif");

John.duties();
John.greeting();


- prototype
Array.prototype.isThereThisValue = function (val) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === val ) {
            return true;
        }
    }
        return false;
};

let myArr = [23,45, 46, 48];
console.log(myArr.isThereThisValue(54)); // output false

HOMEWORK:
Convert object literal
into 
1) constructor function
2) obj literal
1. Constructor function  >> Inheritance requ/ mult. obj needed with sam blueprint
2. obj literal >> Simple Obj definition created on the fly
3. Factory Pattern >> Messaging needs to be done before creating the obj.
4. Obj constructor >> Simple Obj def. created on the fly
  - var obj = new Object();
5. Obj create >> Usu. for the inheritance purposes


- BOM
Refer to caniuse.com
it shows we can use the certain function on BOM

1. go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 - document.title;  // "instanceof - JavaScript | MDN"
 // is very important

 - window.navigator
// Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8…}

- window.navigator.onLine // shows you online status usesful network connectivity smartphone.  its online status flickers


- review
https://docs.google.com/document/d/1MIpw130J7RMc7t-mXCHeZwkWLEux4WwdS8GGZyHzuHI/edit

Class 7
- Class 5) go over BOM geolocation, animation