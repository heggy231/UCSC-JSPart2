/**
 * Created by Heggy on 7/19/17.
 */
//
// var a = 23;
// var b = a;
// b = 55;
// console.log(a);
// console.log(b);
//
// var obj1 = {
//     name : ' John ';
// age : 23
// }
//
// var obj2 = obj1;
//
// obj2.age = 55;
//
// console.log(objt1.age);

//////////////////////

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
// when you are calling age that execution creates new age and gets the global age 29

console.log(age);
console.log(obj.city);