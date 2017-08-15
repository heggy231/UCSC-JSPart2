/**
 * Created by viveksh2 on 3/3/14.
 */
function Shape(){
    this.name = 'shape';
    this.toString = function() {return this.name;};
}

function TwoDShape(){
    this.name = '2D shape';
}
function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function(){return this.side * this.height / 2;};
}

TwoDShape.prototype = new Shape(); // It actual
Triangle.prototype = new TwoDShape();
var trianagle1 = new Triangle();
alert(trianagle1);
alert(trianagle1.getArea());



