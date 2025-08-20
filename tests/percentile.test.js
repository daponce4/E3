const percentile = require("../src/utils/percentile");

test("percentil 0 devuelve mínimo", () => {
  expect(percentile(0, [1, 2, 3])).toBe(1.00);
});

test("percentil 100 devuelve máximo", () => {
  expect(percentile(100, [1, 2, 3])).toBe(3.00);
});

test("percentil 50 con método nearest-rank", () => {
  expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
});