const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('Diplodocus', 'herbivore', 80);
    dinosaur3 = new Dinosaur('Stegosaurus', 'omnivore', 60);
  })

  it('should have a name', function (){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function (){
    assert.strictEqual(park.ticketPrice, 50)
  });

  it('should have a collection of dinosaurs', function (){
    park.dinosaurs.push(dinosaur1)
    park.dinosaurs.push(dinosaur2)
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2])
  });

  it('should be able to add a dinosaur to its collection', function (){
    // park.collectionOfDinosaurs.push('T-Rex')
    // assert.deepStrictEqual(park.collectionOfDinosaurs.length, 4);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
