// Object constructor and prototyping
// When you need an object that you can instantiate multiple times, the object constructor and prototyping are the answer. An object constructor is just like any other function, but when naming the function you actually give the function the name of the object in which you are creating it. In this case, that object name is Gallery. However, because you want to have the ability to create multiple instances of the gallery object, I named it GalleryObj for this example.

// The object constructor begins to differentiate itself when you start adding properties and methods to it. I personally don't add methods to my constructors because it is arguably bad form, but it is possible to do so. When adding a property or method to an object constructor, you use this keyword before the property or method names to assign them to the object itself.

// Great read for creating constructor and prototype
// https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

// Defining properties in an object constructor

function GalleryObj(intv, id) {
  this.Images = ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'];
  this.CurrentIndex = 0;
  // when the Next and Prev is called inside of html it is not pointing
  //  to the GalleryObj therefore we define holdingPot for 'this' javascropt
  // without setting gallery = this then the # inside html pg gets called.
  var gallery = this;

  this.Next = function() {
    if(gallery.CurrentIndex < (gallery.Images.length - 1)) {
      gallery.CurrentIndex++;
    } else {
      gallery.CurrentIndex = 0;
    }
    gallery.Display();
  };

  // Difference btwn Literal vs. Constructor for setInterval for auto-advancing the gallery photos is now defined per instance (copy of method) rather than within the object definition. This lets you control the interval for each gallery instance separately.
  this._loopInterval = setInterval(this.Next, intv);

  this.Prev = function () {
    if(gallery.CurrentIndex > 0) {
      gallery.CurrentIndex--;
    } else {
      gallery.CurrentIndex = (gallery.Images.length - 1);
    }
    gallery.Display();
  };
  this.Display = function () {
      var photoGallery = document.getElementById(id);
      var currentImage = gallery.Images[gallery.CurrentIndex];
      // .src is html element CurrentImage is babyMeekats.jpeg
      photoGallery.src = "img/" + currentImage;
    };
}

// create instance of custom GalleryObj interval 2 sec
// GalleryObj(intv, id) remember to put html img id here
var Gallery = new GalleryObj(2000, "photo-gallery");

// create instance of custom GalleryObj interval 3 sec 
var Gallery2 = new GalleryObj(3000, "photo-gallery2");
Gallery2.Images = ['ArcticFoxSleep.jpg', 'brownbabyfox.jpg', 'babyFox.jpg'];

// https://repl.it/Jt0v/4
// newest update https://repl.it/Jt0v/5