const calcWeightedGrade = require("../src/utils/calcWeightedGrade");

test("calcula nota ponderada correctamente", () => {
  const result = calcWeightedGrade([
    { score: 80, weight: 0.4 },
    { score: 90, weight: 0.6 }
  ]);
  expect(result).toBe(86.00);
});