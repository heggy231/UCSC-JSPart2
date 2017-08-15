// Object constructor and prototyping
// When you need an object that you can instantiate multiple times, the object constructor and prototyping are the answer. An object constructor is just like any other function, but when naming the function you actually give the function the name of the object in which you are creating it. In this case, that object name is Gallery. However, because you want to have the ability to create multiple instances of the gallery object, I named it GalleryObj for this example.

// The object constructor begins to differentiate itself when you start adding properties and methods to it. I personally don't add methods to my constructors because it is arguably bad form, but it is possible to do so. When adding a property or method to an object constructor, you use this keyword before the property or method names to assign them to the object itself.

// Great read for creating constructor and prototype
// https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

// Defining properties in an object constructor

// main diff constructor vs prototype
GalleryObj.prototype.Next = function() {
  // debugger;
  if(this.CurrentIndex < (this.Images.length - 1)) {
    this.CurrentIndex++;
  } else {
    this.CurrentIndex = 0;
  }
  this.Display();
};

function GalleryObj(intv, id) {
  this.Images = ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'];
  this.CurrentIndex = 0;
  this.id = id;
  this.intv = intv;
  var autoNext = this.Next;
  this._loopInterval = setInterval(autoNext.bind(this), intv);
}


GalleryObj.prototype.Prev = function () {
  if(this.CurrentIndex > 0) {
    this.CurrentIndex--;
  } else {
    this.CurrentIndex = (this.Images.length - 1);
  }
  this.Display();
};
GalleryObj.prototype.Display = function () {
    var photoGallery = document.getElementById(this.id);
    var currentImage = this.Images[this.CurrentIndex];
    photoGallery.src = "img/" + currentImage;
};

// create instance of custom GalleryObj
var Gallery = new GalleryObj(2000, "photo-gallery");
var Gallery2 = new GalleryObj(1000, "photo-gallery2");
Gallery2.Images = ['ArcticFoxSleep.jpg', 'brownbabyfox.jpg', 'babyFox.jpg'];

// Gallery2.Images = ['ArcticFoxSleep.jpg', 'brownbabyfox.jpg', 'babyFox.jpg'];

// GalleryObj.prototype.Next = function() {
//   if(Gallery2.CurrentIndex < (Gallery2.Images.length - 1)) {
//     Gallery2.CurrentIndex++;
//   } else {
//     Gallery2.CurrentIndex = 0;
//   }
//   Gallery2.Display();
// };

// GalleryObj.prototype.Prev = function () {
//   if(Gallery2.CurrentIndex > 0) {
//     Gallery2.CurrentIndex--;
//   } else {
//     Gallery2.CurrentIndex = (Gallery2.Images.length - 1);
//   }
//   Gallery2.Display();
// };
// GalleryObj.prototype.Display = function () {
//     var photoGallery = document.getElementById('photo-gallery');
//     var currentImage = Gallery2.Images[Gallery2.CurrentIndex];
//     photoGallery.src = "img/" + currentImage;
// };

