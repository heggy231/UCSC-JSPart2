- check out  http://eslint.org/
- PPT class 2 
Equal and Not Equal

 var obj2 = {
            breed: "fido",
            valueOf: function () {
                return 5;

            }
//            toString: function(){
//                return "uc";
//            }

        };

         // composition wise both are identical
        // obj2 toString method
        alert (obj1);
        alert (obj2); // types uc

- Conditional Operator

variable = boolean_expression ? true_value : false_value;

If it’s true, then true_value is assigned to the variable; if it’s false, then false_value is assigned to the variable, as in this instance:

    <title>Conditional Operator Example 1</title>
    <script type="text/javascript">

        var num1 = 10;
        var num2 = 25;
        var num3 = (num2 > num1) ? num2 : num1;

        if(num2 > num1)
        {
            num3 = num2

        }else{

            num3 = num1;
        }
        alert(num3);   //25

isNaN("123") // false is not a number? No, it is number
// it will try to convert
isNaN("123x") // true since that x
isFinite("123") // true it looks up valueOf 

BestPractices_toFixed() -- look at the picture I took.
always algorithem; check for         
if(theNumberKeyed && isFinite(theNumberKeyed) && !isNan(theNumberKeyed1)){

  - try for-in

  var myObj = {
    name: "Heggy",
    age: 20,
    hobby: "Reading"
};

for ( key in myObj) {
    console.log("myObj property => " + key + "myObj value => " + myObj[key]);
}

// myObj property => namemyObj value => Heggy
// myObj property => agemyObj value => 20
// myObj property => hobbymyObj value => Reading -->

Number('123 px') NaN
parseInt ('123 px') 
var x = 5 + "5" 
var x = 5 ++ ("5"); console.log(
)

var x = 42 == "42" True
keyword for block level scoping  let
block

var result = null == undefined true

var result = null === undefined false null is not trip equal to undefinted

obj represent global scope in jS running in the browser

https://kahoot.it/#/ play
Alexa quiz 
all written JS


<title>A Simple Example to Show The Global Context</title>
    <script src="./js/defining_functions.js"></script>
</head>
<body style="background-color: #9acd32">
<a>When an execution
    context has executed all of its code, it is destroyed, taking with it all of the variables and functions
    defined within it (the global context isn’t destroyed until the application exits, such as when a web
    page is closed or a web browser is shut down).

execution context () is what current function may see
slide 5, PPT 3

everytime new function call it creates new execution context obj

- Creation Phase of execution 
1) Creation of Variable Object[VO]
2) Creation of Scope Chain.
3) Determine the value of “this”.

- Execution Phase
The code of the function that generated the current execution context is executed line by line.

- Scope chain: Scoping basically answers the question:
“Where can we access a certain variable???”


Each new function creates a scope : the space/environment, in which the variables it defines are accessible. 


 Lexical Scoping: A function which is lexically in the scope of another function, get access to the scope of the outer function.

 let a = 123;
function first() {
    console.log("Called function first");
    let b = "Hi"; // block level scoping that let only ensures
    second();
        
        function second() {
            console.log("Called function second");
            let c = "there";
            third();
        }
}
function third() {
    let d = "Guys";
    console.log("Called function third");
    // console.log ( a + b + c + d);
}

first();


various way to make this pass
I took pictures

Next class Wednesday 7/19/20:
 primitive vs. Objects

 function declarations

 Higher order functions

 Types of functions: IIFE, callback, Closures
Í
 Function Borrowing: ex) Call, Apply, Bind