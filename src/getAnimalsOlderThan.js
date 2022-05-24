const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let classe = data.species.find(elem => elem.name === animal);
  return classe.residents.every(elem => elem.age >= age)
}

module.exports = getAnimalsOlderThan;
