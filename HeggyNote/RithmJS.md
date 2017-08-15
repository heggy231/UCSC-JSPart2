https://www.rithmschool.com/courses/javascript/javascript-objects-iteration
{ Object Iteration. }


Objectives
By the end of this chapter you should be able to:

Understand how to iterate through an object using a for...in loop
Determine if a key exists in an object using an if...in statement
Looping over objects

One of the most important ideas in programming is the idea of iteration, or looping. Let's say we want to print out all of the values in an object. One way we can do this is by printing the values individually, one per line.

var obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.favoriteColor);
console.log(obj.job);
console.log(obj.developer);
Although this will work, there are cases where we don't know the keys that an object has. In that case, looping is a much better idea. Let's take a look at how we would loop over the keys in an object.

To iterate over objects, we use a for in loop.

var instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: true
};

for(var singleKey in instructor){
    console.log(instructor[singleKey]);
}

// the loop will log:
// "Matt"
// true
// true
In the code example, singleKey is a variable that will be assigned to each key in the instructor object. To access the key's value, we must use the bracket notation.

if...in: Determining If a Key Exists in an Object

Sometimes, we just want to check and see if a certain key exists in an object. To do that we use a if...in statement. Here is an example

var obj = {
    favoriteNumber: 33,
    favoriteColor: 'blue'
}

if ("favoriteNumber" in obj){
    console.log("The favoriteNumber key exists!");
}

// "The favoriteNumber key exists!"

if ("nothing" in obj){
    console.log("The nothing key exists!");
}
Exercises
1) Given the following object below, write code to print the value then the key to the console separated by '=>':

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (var key in namesAndHobbies) {
	console.log(namesAndHobbies[key] + ' => ' + key);
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim


2) Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

When you're ready, move on to Object Exercises