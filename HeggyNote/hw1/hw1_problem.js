// Class 4: Introduction to Objects (user-defined) 
// Please submit your answers to the following questions in a document with the name of the document as >> studentName + class number + "Assignment.":

// Exercise 8: Objects

// Create a gallery of the pictures that were created using the object literal notation in the class with

// 1. Constructor notation
// 2. Prototype notation.
// 3. Refactor the code to add inheritance using.
//   1. Object.create()
//   2. ES6 Classes.

// Example gallery using the object literal notation:

var Gallery = {
  // adding prop Images, CurrentIndexto custom obj using literal notation
  // key : value (structure for def. prop)
  Images: ['istockphoto_14149033.jpg', 'istockphoto_14232771.jpg', 'istockphoto_14667148.jpg'],
  CurrentIndex: 0,
  // Adding methods to Gallery object using literal notation
  Next: function () {
    // when i is less than last element in array
    if(Gallery.CurrentIndex < (Gallery.Images.length - 1)) {
      // add one to CurrentIndex prop
      Gallery.CurrentIndex++;
    } else {
      // reset to first element of Images array
      Gallery.CurrentIndex = 0;
    }
    Gallery.Display();
  },
  Prev: function() {
    // if CurrentIndex is not at beginning
    if(Gallery.CurrentIndex > 0){
      Gallery.CurrentIndex--;
    // if at beginning
    } else {
      // go to last image
      Gallery.CurrentIndex = (Gallery.Images.length - 1);
    }
    Gallery.Display();
  },
  Display: function () {
    var photoGallery = document.getElementById('photo-gallery');
    // Images is where array of pictures live
    var currentImage = Gallery.Images[Gallery.CurrentIndex];
    // set source (document.getElementById('photo-gallery').src) to currentImage
    photoGallery.src = "img/" + currentImage;
  }
};
// when window loads toggle every 2.5 sec
window.onload = function () {
  // setInterval is window obj native method
  var _loopInterval = setInterval(Gallery.Next, 2500);
};

//////////////////// HINT ////////////////////////////
// one path to implement prototype

function gallery() {

}

// using constructor
class CoolGuy {
  specialTrick = nothing

  CoolGuy ( trick ) {
    specialTrick = trick
  }

  showOff() {
    output( "Here's my trick: ", specialTrick)
  }
}

// To make a CoolGuy instance, call the class constuctor
Joe = new CoolGuy( "jumping rope")

Joe.showOff() // Here's my trick: jumping rope

// everything added to prototype function
gallery.prototype