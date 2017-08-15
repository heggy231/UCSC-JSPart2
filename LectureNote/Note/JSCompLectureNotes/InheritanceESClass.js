
// defining person OBJ
class Person {
    constructor() {
        this.planet = "Earth";
    }
    // function 
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
        // adding two into policeman
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

// I am 35years old and I work as a Sherrif
// Hi I'm John,  And I live on Earthwith a badge number 12345
