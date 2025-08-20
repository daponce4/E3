/**
 * percentile(p, values) — método nearest-rank
 * p: número en [0,100]
 * values: arreglo de números, longitud ≥1
 * devuelve valor con 2 decimales
 */
function percentile(p, values) {
  if (typeof p !== 'number' || !isFinite(p)) {
    throw new TypeError('p debe ser un número finito');
  }
  if (p < 0 || p > 100) {
    throw new RangeError('p debe estar entre 0 y 100');
  }
  if (!Array.isArray(values) || values.length < 1) {
    throw new TypeError('values debe ser un arreglo con al menos un elemento');
  }

  const sorted = values.slice().sort((a, b) => a - b);
  const N = sorted.length;
  let rank = Math.ceil((p / 100) * N);
  if (p === 0) rank = 1;
  if (p === 100) rank = N;

  const result = sorted[rank - 1];
  if (typeof result !== 'number' || !isFinite(result)) {
    throw new TypeError('elemento en values no es un número finito');
  }
  return Number(result.toFixed(2));
}

module.exports = percentile;
