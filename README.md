# UCSC-JSPart2
Indept look of JS

# jsComp
JS AJAX comprehensive course at UCSC

- Lecture materials
https://github.com/decentcamper/JavaScriptComprehnsive

## class 3 JavaScript
# functions
Primitive vs reference values
Most in JS is Primitives:
- Undefined
- Null
- Boolean
- Number
- String

Primitives are accessed by value

Accessed by reference: object value
for in loop 

var person = new Object(); // creates new object
        person.name = "Vivek";
        person.occupation = "Instructor";
        person.age = 30;

       //To loop through all the attributes of an object..
       for(attributes in person){
           alert(person[attributes]);

       }
        alert(person.name);    //"Vivek"


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

While you can add any property to the reference type dynamically, you cannot do that in case of primitive values.

    var name = "Vivek";
    name.age = 33;
    alert(name.age);    //undefined

- copying primitive value
var num1 = 5;
var num2 = num1;
num2 += 5;
alert(num2);
alert(num1);

- copying reference value
function myFunction(){
    var obj1 = new Object();
    // both pointing the same value in memory heap
    var obj2 = obj1;
    obj1.name = "Vivek";
    alert(obj2.name);
};

## Execution Context and Scope
When an execution
    context has executed all of its code, it is destroyed, taking with it all of the variables and functions
    defined within it (the global context isn’t destroyed until the application exits, such as when a web
    page is closed or a web browser is shut down)

// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
    for(var p in o) 
        console.log(p + ": " + o[p] + "\n"); 
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; }

// Function expressions can include names, which is useful for recursion.
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:

// .sort number ascending sm to lg
// using compare function
data.sort(function(a,b) { return a-b; });


// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));
// output: 100; x here is 10 

## segue understanding recursion
1) // function may see itself
function recurse() {
	console.log(recurse);
}

recurse() 
// outputs: function recurse() {
	console.log(recurse);
}

2) function can call themselves, but we need to make sure they stop at some point


- case 1: we don't put a stop to function call themselves
which results in stackoverflow

function recurse() {
	recurse();
}

recurse();
// output: VM588:1 Uncaught RangeError: Maximum call stack size exceeded
// stack has limit and it has reached its limit aka stack overflow

- case 2: now we will put stop to function call itself.
We will ass base case.

var counter = 0;
​
function recurse() {
    // Base case:
    if (counter === 1) {
        return 'done';
    // Recursive case:
    } else {
        counter++;
        var result = recurse();
        return result;
    }
}

// step throug debugger
debugger;
recurse(); // when var result = recurse() assigned 'done'
// recurse() ends outputs 'done'

- this is the same as above but returns result in one line of code

var counter = 0;

function recurse() {
	// Base case:
	if (counter === 1) {
		return 'done';
	// Recursive case:
	} else {
		counter++;
// 		var result = recurse();
// 		return result;
		return recurse(); // return the result in one line
	}
}

- factorial 
// factorial
4! = 4 * 3 * 2 * 1
3! =     3 * 2 * 1
2! =         2 * 1
1! =             1

n! = n * (n - 1)!
4! = 4 * (4 - 1)!


function factorial(n) {
	// Base case:
	if (n === 1) {
		return 1;
	// Recursive case:
	} else {
		return n * factorial(n - 1);
	}
}

debugger;
// factorial of 1 doesn't recurse but just hits the base case
factorial(1);
// output: 1

debugger;
factorial(2);
// output: 2

debugger;
factorial(3);
// output: 6

- run factorial(3)
factorial(3)
3 * factorial(2)
    2 * factorial(1)
        1 // base case when factorial(1)
	   2 // return val factorial(2) = 2 * 1 
6 // return val factorial(3) = 3 * 2

- run factorial(5)
factorial(5)
5 * factorial(4)
	4 * factorial(3)
		3 * factorial(2)
			2 * factorial(1)
				1 * factorial(0) // once hits base case we stop recurse, return value
					1 // return value of factorial(0)
				1 // return value of factorial(1)
			2 // return value of factorial(2)
		6 // return value of factorial(3)
	24 // return value of factorial(4)
120 // return value of factorial(5)