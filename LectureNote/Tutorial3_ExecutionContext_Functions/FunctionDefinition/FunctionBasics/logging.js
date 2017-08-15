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
