
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },

  stop: () => {
    return 'Stopping';
  },

});

function CarFactory(name, wheels) {
  let car = Object.assign(
    {name},
    {wheels: 4},
    Vehicle()
  );
  return Object.freeze(car);
}

function MotorcycleFactory(name, wheels){
  let moto = Object.assign(
    {name},
    {wheels: 2},
    {wheelie},
    Vehicle()
  );
  function wheelie() { 
    return 'Whee!';}

  return Object.freeze(moto);
}

module.exports = {CarFactory, MotorcycleFactory};