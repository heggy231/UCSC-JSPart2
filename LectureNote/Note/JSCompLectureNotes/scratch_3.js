Array.prototype.isThereThisValue = function (val) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === val ) {
            return true;
        }
    }
        return false;
};

let myArr = [23,45, 46, 48];
console.log(myArr.isThereThisValue(54)); // output false