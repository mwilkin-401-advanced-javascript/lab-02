'use strict';
class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'Moving Forward';
  }
  
  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name, wheels){
    super(name, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels){
    super(name, wheels);
  }
  wheelie() {
    return 'Whee!';
  }
}

module.exports = {Car, Motorcycle};