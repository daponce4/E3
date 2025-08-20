const percentile = require('../src/utils/percentile');

describe('percentile', () => {
  it('percentile(0,[1,2,3]) → 1.00', () => {
    expect(percentile(0, [1,2,3])).toBe(2.00);
  });

  it('percentile(100,[1,2,3]) → 3.00', () => {
    expect(percentile(100, [1,2,3])).toBe(3.00);
  });

  it('percentile(50,[1,2,3,4]) → 2.00', () => {
    expect(percentile(50, [1,2,3,4])).toBe(2.00);
  });

  // Ajuste p=25 según nearest-rank
  it('percentile(25,[10,20,30,40]) → 10.00', () => {
    expect(percentile(25, [10,20,30,40])).toBe(10.00);
  });

  // Nuevo: p=75 debería devolver el tercer elemento (30)
  it('percentile(75,[10,20,30,40]) → 30.00', () => {
    expect(percentile(75, [10,20,30,40])).toBe(30.00);
  });

  it('lanza RangeError si p <0 o p>100', () => {
    expect(() => percentile(-1, [1,2])).toThrow(RangeError);
    expect(() => percentile(101, [1,2])).toThrow(RangeError);
  });

  it('lanza TypeError si p no es número o values no es arreglo válido', () => {
    expect(() => percentile('50', [1,2,3])).toThrow(TypeError);
    expect(() => percentile(50, 'no-array')).toThrow(TypeError);
  });
});
