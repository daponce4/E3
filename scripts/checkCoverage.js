// scripts/checkCoverage.js
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json'));
const { lines, branches } = data.total;

if (lines.pct < 85 || branches.pct < 85) {
  console.error(`❌ Cobertura insuficiente: líneas ${lines.pct}% / ramas ${branches.pct}%`);
  process.exit(1);
} else {
  console.log(`✅ Cobertura suficiente: líneas ${lines.pct}% / ramas ${branches.pct}%`);
}
