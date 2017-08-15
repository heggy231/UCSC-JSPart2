// Creating a custom object using literal notation

var Gallery = {
  // adding prop Images, CurrentIndexto custom obj using literal notation
  // key : value (structure for def. prop)
  Images: ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'],
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
