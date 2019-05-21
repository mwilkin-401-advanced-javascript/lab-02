'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.drive(), harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const fordTruck = new VehicleClass.Car('F350');
console.log(fordTruck.name, fordTruck.drive(), fordTruck.stop());

const triumph = new VehicleClass.Motorcycle('Rocket 3');
console.log(triumph.name, triumph.drive(), triumph.wheelie(), triumph.stop());

// Implement a car and motorcycle using a Factory

const porsche = new VehicleFactory.Car('911');
console.log(porsche.name, porsche.drive(), porsche.stop());

const ktm = new VehicleFactory.Motorcycle('450 SX-F');
console.log(ktm.name, ktm.drive(), ktm.wheelie(), ktm.stop());