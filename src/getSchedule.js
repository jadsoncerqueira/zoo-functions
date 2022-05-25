const data = require('../data/zoo_data');

// função verifica animais do dia passado como parametro

const verificaAnimais = (dia) => {
  const animaisList = [];
  const animais = data.species.filter((elem) => elem.availability.some((elem1) => elem1 === dia));
  animais.forEach((elem) => animaisList.push(elem.name));
  return animaisList;
};

// constante que guarda objeto com as chaves dos dias semana com seus respectivos horarios e animais em exibição

const todosAnimais = {
  Tuesday: { 
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: verificaAnimais('Tuesday')
  },

  Wednesday: { 
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: verificaAnimais('Wednesday')
  },

  Thursday: { 
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: verificaAnimais('Thursday')
  },

  Friday: { 
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: verificaAnimais('Friday')
  },

  Saturday: { 
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: verificaAnimais('Saturday')
  },

  Sunday: { 
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: verificaAnimais('Sunday')
  },

  Monday: { 
    officeHour: 'CLOSED', exhibition: 'The zoo will be closed!'
  },
};

function auxFunction(scheduleTarget1) {
  const diasSemana = Object.keys(data.hours);
  let diasSelecionado;
  if (diasSemana.some((elem) => elem === scheduleTarget1)) {
    const dia = {};
    dia[scheduleTarget1] = todosAnimais[scheduleTarget1];
    return dia;
  }
  data.species.forEach((elem) => {
    if (elem.name === scheduleTarget1) {
      diasSelecionado = elem.availability;
    }
  });
  if (diasSelecionado === undefined) {
    return todosAnimais;
  }
  return diasSelecionado;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget) {
    return auxFunction(scheduleTarget);
  }
  return todosAnimais;
}

module.exports = getSchedule;
