/**
 * calcWeightedGrade(items)
 * items: Array<{ score: number, weight: number }>
 * - suma de weights debe ser 1 ±0.001, sino RangeError
 * - score en [0,100], weight en [0,1]
 * - devuelve nota en 0–100 con 2 decimales
 */
function calcWeightedGrade(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items debe ser un arreglo');
  }
  const sumW = items.reduce((acc, { weight }) => {
    if (typeof weight !== 'number' || !isFinite(weight)) {
      throw new TypeError('weight debe ser un número finito');
    }
    return acc + weight;
  }, 0);

  if (Math.abs(sumW - 1) > 0.001) {
    throw new RangeError(`La suma de weights debe ser 1 (±0.001), pero es ${sumW}`);
  }

  const total = items.reduce((acc, { score, weight }) => {
    if (typeof score !== 'number' || !isFinite(score)) {
      throw new TypeError('score debe ser un número finito');
    }
    if (score < 0 || score > 100) {
      throw new RangeError('score debe estar entre 0 y 100');
    }
    return acc + score * weight;
  }, 0);

  return Number(total.toFixed(2));
}

module.exports = calcWeightedGrade;
