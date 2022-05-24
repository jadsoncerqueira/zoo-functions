const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  let animais = []
  if (ids) {
    let arg = Object.values(arguments);
    arg.forEach(element1 => {
      let aux = data.species.find(element2 => element2.id === element1 )
      animais.push(aux)
    });
  }
  return animais
}

module.exports = getSpeciesByIds;