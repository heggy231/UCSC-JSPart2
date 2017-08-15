/**
 * Created by viveksh2 on 7/14/14.
 */
function myFunction(){
    var obj1 = new Object();
    // both pointing the same value in memory heap
    var obj2 = obj1;
    obj1.name = "Vivek";
    alert(obj2.name);

};