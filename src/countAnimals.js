const data = require('../data/zoo_data');

function countAnimals(animal) {
  let relatorio = {}
  if (animal) {
    let animalRetornado = data.species.find(element => element.name === animal.specie)
    if (animal.sex !== undefined){
      animalRetornado = animalRetornado.residents.filter(elem => elem.sex === animal.sex)
      return animalRetornado.length
    } else {
      return animalRetornado.residents.length
    }
  } else {
    data.species.forEach(element => {
      let nome = element.name
      let totalSpecies = element.residents
      relatorio[nome] = totalSpecies.length
    })
    return relatorio
  }
}

module.exports = countAnimals;
