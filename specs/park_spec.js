const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurs;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('Diplodocus', 'herbivore', 80);
    dinosaur3 = new Dinosaur('Stegosaurus', 'omnivore', 60);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 50, dinosaurs);

  })

  it('should have a name', function (){
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function (){
    assert.strictEqual(park.ticketPrice, 50);
  });

  it('should have a collection of dinosaurs', function (){
    // park.dinosaurs.push(dinosaur1);
    // park.dinosaurs.push(dinosaur2);
    assert.deepStrictEqual(park.dinosaurs,[dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.dinosaurs = [dinosaur1, dinosaur2];
    park.dinosaurs.push(dinosaur3);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park.dinosaurs.pop();
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(park.mostVisitors(), 'T-Rex');
  });

  it('should be able to find all dinosaurs of a particular species',);

  it('should be able to remove all dinosaurs of a particular species');

});
