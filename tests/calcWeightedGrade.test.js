const calcWeightedGrade = require('../src/utils/calcWeightedGrade');

describe('calcWeightedGrade', () => {
  it('caso de referencia debe devolver 86.00', () => {
    const items = [
      { score: 80, weight: 0.4 },
      { score: 90, weight: 0.6 },
    ];
    expect(calcWeightedGrade(items)).toBe(86.00);
  });

  it('lanza RangeError si weights no suman 1', () => {
    expect(() => calcWeightedGrade([
      { score: 50, weight: 0.3 },
      { score: 50, weight: 0.6 }
    ])).toThrow(RangeError);
  });

  it('lanza TypeError si score no es número', () => {
    expect(() => calcWeightedGrade([{ score: '80', weight: 1 }])).toThrow(TypeError);
  });
  // tests/calcWeightedGrade.test.js
  it('lanza RangeError si algún score está fuera de [0,100]', () => {
  expect(() => calcWeightedGrade([{ score: -5, weight: 1 }]))
    .toThrow(RangeError);
  expect(() => calcWeightedGrade([{ score: 105, weight: 1 }]))
    .toThrow(RangeError);
  });
  it('lanza RangeError si suma de weights difiere >0.001 de 1', () => {
   expect(() => calcWeightedGrade([
    { score: 50, weight: 0.5 },
    { score: 50, weight: 0.49 }
  ])).toThrow(RangeError);
  });
});
