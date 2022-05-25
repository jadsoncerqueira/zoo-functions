const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(expected).toEqual(actual);
  });

  it('retornar um array de nomes que possui o nome Jefferson', () => {
    const expected = true;
    const name = 'Jefferson'
    const actual = handlerElephants('names').some((elem) => elem === name);
    expect(actual).toBe(expected);
  });

  it('retorna a média de idade dos elefantes', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toEqual(expected);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toEqual(expected);
  });

  it('retorna a popularidade dos elefantes', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');
    expect(actual).toEqual(expected);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = [ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ];
    const actual = handlerElephants('availability');
    expect(expected).toEqual(actual);
  })
});
