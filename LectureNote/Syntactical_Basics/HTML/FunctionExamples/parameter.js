
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