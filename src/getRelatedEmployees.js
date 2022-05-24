const data = require('../data/zoo_data');

function isManager(id) {
  let status;
  let colaboradores = data.employees.filter(elem => {
   return elem.managers.find(elem => elem === id)
  })
  return status = colaboradores.length > 0
}

function getRelatedEmployees(managerId) {
  let pessoasLideradas = [];
  if (isManager(managerId) === true) {
    let colaboradores = data.employees.filter(elem => {
      return elem.managers.find(elem => elem === managerId);
      })
      colaboradores.forEach(elem => {pessoasLideradas.push(`${elem.firstName} ${elem.lastName}`)});
      return pessoasLideradas;
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
