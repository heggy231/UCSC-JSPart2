
function calculateAge(year) {
    // console.log(this); // global obj
    console.log(2017 - year);
}

// calculateAge(1980);

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function (year) {
        console.log(this); // this points to john
        console.log(2017 - year);
    }
}

// john.calculateAge(1990);

var mike = {
    name: 'mike',
    yearOfBirth: 1992,

}

mike.calculateAge = john.calculateAge; // it creates the method inside of mike

mike.calculateAge(); // this points to mike

console.log(mike);

console.log(john);

// this points to the execution context of run time.