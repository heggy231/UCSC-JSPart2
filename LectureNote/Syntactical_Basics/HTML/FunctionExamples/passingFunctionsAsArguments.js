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