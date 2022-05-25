const data = require('../data/zoo_data');

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

function countEntrants(entrants) {
  let resultado = {
    child: entrants.filter((elem) => elem.age < 18).length,
    adult: entrants.filter((elem) => elem.age >= 18 && elem.age < 50 ).length,
    senior: entrants.filter((elem) => elem.age >= 50).length
  };
  return resultado
}

function calculateEntry(entrants) {
  if (entrants && Object.keys(entrants).length > 0) {
    let entradas = countEntrants(entrants);
    let valores = [ data.prices.child * entradas.child, data.prices.adult * entradas.adult,
      data.prices.senior * entradas.senior] 
    return valores.reduce((valorA, ValorB) => valorA + ValorB)
  }
  return 0
}

module.exports = { calculateEntry, countEntrants };
console.log(calculateEntry([{ name:  'Lara Carvalho', age:  5 }, { name:  'Carlos Nogueira', age:  50 }]))