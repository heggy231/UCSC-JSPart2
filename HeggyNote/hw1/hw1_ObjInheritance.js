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

// defining WolfGallery
// takes everything from GalleryObj and adds it to WolfGallery
class WolfGallery extends GalleryObj {
  constructor(intv, id) {
    // super refers to what you are extending
    super(intv, id);
    this.Images = ['ArcticFoxSleep.jpg', 'brownbabyfox.jpg', 'babyFox.jpg'];
  }
}
// create instance of custom GalleryObj
var Gallery = new GalleryObj(2000, "photo-gallery");
var Gallery2 = new WolfGallery(1000, "photo-gallery2");



