// Creating a custom object using the Object function name with new operator
// var Gallery references newly created obj.
var Gallery = new Object();

window.onload = function () {
  // 3 properties of Gallery obj: CurrentIndex, Images, and _loopInterval
  // Images prop: array that stores the images that are displayed in the gallery
  Gallery.Images = ['babyMeekats.jpeg', 'minx.jpeg', 'owl.jpeg'];
  // CurrentIndex prop: represents current ith Image of array
  Gallery.CurrentIndex = 0;
  // _loopInterval prop: auto loops thru img in the gallery every 2.5 seconds
  Gallery._loopInterval = setInterval(Gallery.Next, 2500);
};

// 3 methods of Gallery obj are Gallery.Next, Gallery.Prev, Gallery.Display
// Next method inc the current i in Images array
Gallery.Next = function() {
  // if CurrentIndex property number inc/dec (changes to different array item)
  if(Gallery.CurrentIndex < (Gallery.Images.length-1)) {
    // go to the next ith position of img
    Gallery.CurrentIndex++;
  // if you are at the last img 
  } else {
    // resets the CurrentIndex back first img
    Gallery.CurrentIndex = 0;
  }
  // show img
  Gallery.Display();
};

// Prev method dec the current i in Images array
Gallery.Prev = function () {
  // if img is on anything otherthan starting ith
  if(Gallery.CurrentIndex > 0) {
    // move to one less index position
    Gallery.CurrentIndex--;
    // if you are on first img then go to last img
  } else {
    Gallery.CurrentIndex = (Gallery.Images.length - 1);
  }
  Gallery.Display();
};

// renders current img to html
Gallery.Display = function() {
  // access to html id element
  var photoGallery = document.getElementById('photo-gallery');
  // when app loads CurrentIndex is 0 then changes with .Next() method runs
  var currentImage = Gallery.Images[Gallery.CurrentIndex];
  // note: Gallery.Images = ['babyMeekats.jpg', 'minx.jpg', 'owl.jpg'];
  // ex) Gallery.Image[0] = 'babyMeekats.jpg'
  photoGallery.src = "img/" + currentImage; 
};
