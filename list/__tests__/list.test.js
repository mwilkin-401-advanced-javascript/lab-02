'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pops one item off the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });
  
  it('shifts the first item off the front of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('b');
  });

  it('adds one or more elements to the beginning of an array and returns the new length of the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.unshift('d');
    expect(stuff.length).toEqual(4);
    expect(stuff.data[0]).toEqual('d');
  });

  it('should go touch  each item of the data set', () => {
    let stuff = new List();
    stuff.push('2');
    stuff.push('5');
    stuff.push('3');
    stuff.forEach((element) => {
      return element * 2;
    });
    expect(stuff.length).toEqual(3);
    expect(stuff.data[1]).toEqual(10);
  }); 

  describe('push()', () => {
    it('pushes items to the end of the data set', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      expect(stuff.length).toEqual(2);
      expect(stuff.data[1]).toEqual('b');
    });
    
    it('shouw throw and error with no parameters provided', () => {
      let stuff = new List();
      try{
        stuff.push();
      } catch(e){
        expect(e.message).toEqual('no item provided');
      }
    });
  });

});
