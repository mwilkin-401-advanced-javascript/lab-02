# Lab-02
## Class 02: Classes, Inheritance, Functional Programming

### Author: Matt Wilkin

### Links and Resources
[submission PR](https://github.com/mwilkin-401-advanced-javascript/lab-02/pull/1)
[travis](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-02)

!
### Documentation

Dependencies
jest
lint

Modules
vehicle-class.js
vehicle-constructor.js
vehicle-factory.js

car(name) -> Object
motorcycle(name) -> Object

let car = new Car('shelby');
//output: {name: 'shelby'}

list-constructor.js
list() -> array method

Exported Values and Methods
foo(thing) -> string
Usage Notes or examples

bar(array) -> array
Usage Notes or examples

### Setup

Running the app
npm start

### Tests
How do you run tests?
What assertions were made?
What assertions need to be / should be made?

_________________
_________________

### Before you begin
Refer to Getting Started in the lab submission instructions for complete setup instructions

### Getting Started: Objects and Classes
In the objects folder, there is a full implementation of a Car and Motorcycle object created using a constructor function, with an index.js file that you can use to visually play with the objects as well as tests.

In the objects/__tests__ folder, you’ll find a file called vehicle.test.js that tests the implementation of both a Car and a Motorcycle using the constructor pattern.

### Requirements
#### Part 1: Vehicles
Implement both Car and Motorcycle using a Javascript Class (in the vehicle-class.js file)
Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)
The tests are pre-configured to run only the constructor variety, but can handle more as you add them.
Software Engineering Note! This is the heart of a refactor – re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation

#### Part 2: List Module
Create a new folder in the lab directory called list to house your code for this assignment
implement a full List constructor using a constructor function
implement the .length property
implement the following methods on the list constructor
push()
pop()
shift()
unshift()
forEach()
Do not use any built-in array methods to do this

#### Re-Implement using a Class definition
Do this after your tests are complete
This should be a refactor: your tests should remain unchanged and green once your re-implementation is completed
Testing
Vehicles
The tests are already written
Not all implementations are wired, however
Keep the tests working as you add new implementations

### List Module
tests that ensure the list module functions correctly with error-check parameters
tests that the correct errors are thrown with invalid arguments exist
tests to ensure that the list module functions return the correct results when invoked with valid arguments

### Stretch Goal:
#### Vehicles
Repeat the process in all directions
Empty out your constructor and factory implmentations, keeping only the class for reference
Implement constructor and factory again
Repeat again, this time using only the factory as a starting point and clearing the others.
Software Engineering Notes! Why repeat the process? Knowing how to easily move between object creation patterns is essential. You’ll be doing quite a bit of this, so it’s good to not only recognize but work the various patterns seen here

#### List Module

Implement these methods as well
map()
filter()
reduce()
slice()
splice()
reverse()
Assignment Submission Instructions
Refer to the the lab submission instructions for the complete lab submission process and expectations
