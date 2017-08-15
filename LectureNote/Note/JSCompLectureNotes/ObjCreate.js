let personProto = {
    calculateAge: function () {
        return 2017 - this.dob;
    }
}

let john = Object.create(personProto);

john.name = "John";
john.dob = 1985;
john.job = "Software Arch";

console.log(john.calculateAge());