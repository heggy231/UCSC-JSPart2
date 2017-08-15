/**
 * Created by Heggy on 7/19/17.
 */

console.log(sumAsDeclaration(10,40));

function sumAsDeclaration (p1, p2) {

    return p1 + p2;
}

// this doesn't get hoisted
var sumAsExpression = function (p1, p2) {

    return p1 + p2;
}

var thirdFunction = sumAsDeclaration; // thirdfunction is now becomes
// function expression since it has var x = something construction

// parameter must be string but this is rarely used
var sumThruFunctionConstructor = new Function ( 'p1', 'p2',  'return p1 + p2');


console.log(sumAsExpression(5,20));