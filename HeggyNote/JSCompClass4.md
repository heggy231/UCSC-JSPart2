var name = 'john'; // global

function first () {
    var greeting = 'hi';
    second();
    function second() {
        var c = 'how are you?';
        console.log( greeting + name + c );
    }
}

first();

// July 19, 2017 file name: scopeChain.js

var name = 'john'; // global

function first () {
    console.log("Called first");
    var greeting = 'hi';
    second();
    function second() {
        console.log("Called second");
        var c = 'how are you?';
        console.log( greeting + name + c );
    }
}

function third () {
    console.log("Called third");
    var d = 'All Good?';
    console.log( greeting + name + c + d );
}

first();

//exeuctionContextVsScopeChain.js

// fix this lexically inside

var name = 'john'; // global

function first () {
    console.log("Called first");
    var greeting = 'hi';
    second();
    function second() {
        console.log("Called second");
        var c = 'how are you?';
        console.log( greeting + name + c );
        third()

        function third () {
            console.log("Called third");
            var d = 'All Good?';
            console.log( greeting + name + c + d );
        }
    }
}

first();

var name = 'john'; // global

function first () {
    console.log("Called first");
    var greeting = 'hi';
    second(); // second function is nested only available where it lives
    function second() {
        console.log("Called second");
        var c = 'how are you?';
        console.log( greeting + name + c );
        third();

        function third () {
            console.log("Called third");
            var d = 'All Good?';
            console.log( greeting + name + c + d );
        }
    }
}



first();


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

// thisVariable.js
// this points to the execution context of run time.


/**
 * Created by Heggy on 7/19/17.
 */

var a = 23;
var b = a;
b = 55;
console.log(a);
console.log(b);

var obj1 = {
    name : ' John ';
age : 23
}

var obj2 = obj1;

obj2.age = 55;

console.log(objt1.age);

    // param a: copy of whatever age has : value 29, but has an independent copy
    // since primitives are passed by value
    
    // param b: copy of whatever obj has : reference of the object, since objects
    // are passed by reference

var age = 29;
var obj = {
    name: 'heggy',
    city: 'NYC'
};

function change(a, b){
    a = 30;
    b.city = "SF";

}
change(age, obj); // age is 29 since it is primitive, obj is 'sf' since refer

console.log(age);
console.log(obj.city);

function declaraion (function functionDeclaration(p1,p2)) is hoisted but function expression (var function expression = function () {}) is not. hoisted meaning you can call the function before you define for function declaration.

Understanding arguments
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=css&skin=sunburst"></script>
    <title>Function Example 5</title>

    <script type="text/javascript">

        function sayHiNamedArguments(name,solicitation) {
            alert("Hello " + name + ", " + solicitation);

        }

        function sayHiWithoutNamedArguments(){

            alert("Hello " + arguments[0] + ", " + arguments[1]);
        }


    </script>


</head>
<body>

function gets arguments array


function sumForTwoParams ( param1, param2) {
    return param1 + param2;
}

function sumForThreeParams ( param1, param2, param3) {
    return param1 + param2 + param3;
}

function universalAdd() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


/**
 * Created by Heggy on 7/19/17.
 */

console.log(universalAdd(20, 30, 40, 55, 44, 33))

Arguments are array-like type.  interview question to keep in mind

/**
 * Created by Heggy on 7/19/17.
 */

var year = [1990, 1995, 1981, 1977, 2005];

function calculateMetrics (arr, functionPassed) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(functionPassed (arr[i]));
    }
    return result;
}

function calculateAge (year) {
    return 2017 - year;
}

function isFullAge(age){
    return age > 18;
}

function maxRateHeartRate (age) {
    if (age > 18 && age < 81) {
        return Math.round (206 - 0.67 * age);
    } else {
        return -1;
    }
}

var ages = calculateMetrics(year, calculateAge);
var isAdult = calculateMetrics(ages, isFullAge);
var maxHeartRates = calculateMetrics(ages, maxRateHeartRate);
console.log(isAdult); // [ true, true, true, true, false ]
console.log(maxHeartRates); //[ 188, 191, 182, 179, -1 ]

    <title>Function as an Argument Example</title>
    <script type="text/javascript">


        // Factory Function
        function callSomeFunction(someFunction, someArgument){
            return someFunction(someArgument);
        }

        function add10(num){
            return num + 10;
        }
        var result1 = callSomeFunction(add10, 10);
        alert(result1);   //20

        
        
        
        function getGreeting(name){
            return "Hello, " + name;
        }
        var result2 = callSomeFunction(getGreeting, "Nicholas");
        alert(result2);   //Hello, Nicholas

.call()

/**
 * Created by Heggy on 7/19/17.
 */
var logging = function () {
    console.log(this);
};

var mike = {
    name: "Mike",
    title: "Arch"
};

// borrowing executing and deleting

var john = {
    name: "John",
    title: "Dev"
};

// john.logging = logging;
// john.logging();
// delete john.logging;

logging.call(john);

// mike.logging();
// mike.logging = logging;
// delete mike.logging;

logging.call(mike); // deletes when you call it
