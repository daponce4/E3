function percentile(p, values) {
  if (typeof p !== "number" || p < 0 || p > 100) {
    throw new RangeError("p debe estar entre 0 y 100");
  }
  if (!Array.isArray(values) || values.length < 1) {
    throw new TypeError("values debe ser un arreglo con al menos un número");
  }

  const sorted = [...values].sort((a, b) => a - b);
  const N = sorted.length;

  if (p === 0) return Number(sorted[0].toFixed(2));
  if (p === 100) return Number(sorted[N - 1].toFixed(2));

  const rank = Math.ceil((p / 100) * N);
  return Number(sorted[rank - 1].toFixed(2));
}

module.exports = percentile;