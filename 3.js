'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function() {
  return 2 * this.radius * Math.PI;
}

Circle.prototype.getArea = function() {
  return this.radius * this.radius * Math.PI;
}


Circle.prototype.toString = function() {
  return `Radius: ${this.radius}, ` +
         `Circumference: ${this.getCircumference()}, ` +
         `Area: ${this.getArea()}`;
}

var circle = new Circle(4);

console.log(circle.radius);
console.log(circle.getCircumference());
console.log(circle.getArea());
console.log(circle.toString());
// 4
// 25.132741228718345
// 50.26548245743669
// Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669
