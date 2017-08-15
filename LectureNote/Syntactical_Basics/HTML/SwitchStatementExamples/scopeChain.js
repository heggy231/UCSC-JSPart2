var name = 'john'; // global

function first () {
    var greeting = 'hi';
    second();
    function second() {
        var c = 'how are you?';
        console.log( greeting + name + c );
    }
}

first();