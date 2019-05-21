'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const fordTruck = new VehicleClass.Car('F350');
console.log(fordTruck.name, fordTruck.drive(), fordTruck.stop());

const triumph = new VehicleClass.Motorcycle('Rocket 3');
console.log(triumph.name, triumph.drive(), triumph.stop());

// Implement a car and motorcycle using a Factory
