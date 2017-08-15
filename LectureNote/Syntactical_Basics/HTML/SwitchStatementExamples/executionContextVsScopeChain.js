var name = 'john'; // global

function first () {
    console.log("Called first");
    var greeting = 'hi';
    second();
    function second() {
        console.log("Called second");
        var c = 'how are you?';
        console.log( greeting + name + c );
    }
}

function third () {
    console.log("Called third");
    var d = 'All Good?';
    console.log( greeting + name + c + d );
}

first();

// fix this lexically inside

var name = 'john'; // global

function first () {
    console.log("Called first");
    var greeting = 'hi';
    second(); // second function is nested only available where it lives
    function second() {
        console.log("Called second");
        var c = 'how are you?';
        console.log( greeting + name + c );
        third();

        function third () {
            console.log("Called third");
            var d = 'All Good?';
            console.log( greeting + name + c + d );
        }
    }
}



first();