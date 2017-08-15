/**
 * Created by Heggy on 7/10/17.
 */

var a = 'outer';
// var a = 123;
bar();

//
// function bar() {
//    var a = 345;
//     console.log(a);
//
// }
// console.log(a);



function bar() {
    console.log(a);
    var a = 'inner';
}

// bar(); // undefined