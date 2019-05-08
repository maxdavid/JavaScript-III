/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Bound to window: 'this' always attempts to point to the global window object. 
* 2. Implicit binding with objects and methods
* 3. When using constructor functions, 'this' is referring to the specific object created.
* 4. Using javascript methods `call` and `apply` explicitly defines which object 'this' refers to
*
* write out a code example of each explanation above
*/

// Principle 1
function sayMyName(name) {
  console.log(`Hello, my name is ${this.name}.`);
}
// Should be undefined, as the global context has no variable 'name'
sayMyName('Max');

// Principle 2
const car = {
  carMake: 'Toyota',
  carYear: '2011',
  yearMake: function() {
    console.log(`This car is a ${this.carYear} ${this.carMake}.`);
  }
}
// Should output information for our defined car object
car.yearMake();

// Principle 3

function cat(name) {
  this.name = name,
  this.sound = 'Meow',
  this.furry = true,
  this.makeNoise = function() {
    console.log(`${this.name} said: "${this.sound}"`);
  };
}

const pumpkin = new cat('Pumpkin');
const nutter = new cat('Nutter');
nutter.makeNoise();

// Principle 4

function dog(name) {
  this.name = name,
  this.sound = 'Woof'
}

function makeNoise() {
  console.log(`${this.name} said: "${this.sound}"`);
};

makeNoise.call(dog('Rover'));