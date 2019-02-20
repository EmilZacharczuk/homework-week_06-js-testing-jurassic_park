const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};



Park.prototype.mostVisitors = function () {
  let result = [];
  let resultFinal;
  for (const dinosaur of this.dinosaurs) {
    result.push(dinosaur.guestsAttractedPerDay);
    resultFinal = result.sort(function(a, b){return b - a});
    resultFinal = resultFinal[0];
  };
  // return console.log(resultFinal);
  for (const dinosaur of this.dinosaurs)
    if (dinosaur.guestsAttractedPerDay === resultFinal)
  return dinosaur.species;
};

// Park.prototype.findBySpecies = function (species) {
//   let result = [];
//   for (const dinosaur of this.dinosaurs) {
//     if (dinosaur.species === species)
//     result.push(dinosaur)
//   }
//   return console.log(result);
// };
//
// Park.prototype.totalNumberOfVisitorsPerYear = function () {
//   let total = 0;
//   for (const dinosaur of this.dinosaurs) {}
//     dinosaur.guestsAttractedPerDay += total
//   }
//   return console.log(total);
// };

module.exports = Park;

// dinosaurs = [
// dinosaur1 = {
//   diet: 'carnivore',
//   guestsAttractedPerDay: 100,
//   species: 'T-Rex'
// },
// dinosaur2 = {
//   diet: 'omnivore',
//   guestsAttractedPerDay: 120,
//   species: 'Stegosaurus'
// },
// dinosaur3 = {
//   diet: 'herbivore',
//   guestsAttractedPerDay: 80,
//   species: 'Diplodocus'
// }
// ]
// park = new Park('Jurassic Park', 50, dinosaurs);
//
// park.mostVisitors();
// park.findBySpecies('Diplodocus');
// park.totalNumberOfVisitorsPerYear();
