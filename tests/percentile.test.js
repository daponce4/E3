const percentile = require('../src/utils/percentile');

describe('percentile', () => {
  it('percentile(0,[1,2,3]) → 1.00', () => {
    expect(percentile(0, [1,2,3])).toBe(1.00);
  });

  it('percentile(100,[1,2,3]) → 3.00', () => {
    expect(percentile(100, [1,2,3])).toBe(3.00);
  });

  it('percentile(50,[1,2,3,4]) → 2.00', () => {
    expect(percentile(50, [1,2,3,4])).toBe(2.00);
  });

  it('lanza TypeError si p no es número', () => {
    expect(() => percentile('50', [1,2,3])).toThrow(TypeError);
  });
});
