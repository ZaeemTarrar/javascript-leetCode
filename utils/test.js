/**
 * Converts bytes to mega bytes
 * @param {number} bytes - Any value in bytes
 * @returns {string} "123 MB"
 */
const bytesToMegaBytes = (bytes) => {
  return `${bytes * 1e-6} MB`;
};

/**
 * Calculates the difference between two memory usage stats and
 * converts the result object values from bytes to mega bytes.
 * @param {any} mem1 - process.memoryUsage()
 * @param {any} mem2 - process.memoryUsage()
 * @returns {{
 *    rss: string,
 *    heapTotal: string,
 *    heapUsage: string,
 *    external: string,
 * }}
 */
const memUsageDiffInMb = (mem1, mem2) => {
  if (!mem1 || !mem2) return null;
  return {
    rss: bytesToMegaBytes(mem2.rss - mem1.rss),
    heapTotal: bytesToMegaBytes(mem2.heapTotal - mem1.heapTotal),
    heapUsed: bytesToMegaBytes(mem2.heapUsed - mem1.heapUsed),
    external: bytesToMegaBytes(mem2.external - mem1.external),
  };
};

/**
 * Takes your solution and tests it with the given input/inputs.
 * @param {function} solution
 * @param {array} inputs
 * @param {boolean} log - Displays solution outputs
 * @param {string} preText - Addon to solution output (optional)
 * @return {void}
 */
function testSolution(solution, inputs = [], log = false, preText = "") {
  for (let i = 0; i < inputs.length; i++) {
    const Result = solution(...inputs[i]);
    if (log) console.log(`${preText}Output[${i}]: `, Result);
  }
}

/**
 * Takes your solution and tests it multiple times with
 * the given input/inputs, in accordance to the number of rounds.
 * @param {function} solution
 * @param {array} inputs
 * @param {boolean} log - Displays solution outputs
 * @param {string} label - Title for the solution test
 * @param {number} rounds - No. of times, method if to be tested
 * @return {void}
 */
function multiTest(
  solution,
  inputs = [],
  log = false,
  label = "Solution",
  rounds = 1
) {
  const mem1 = process.memoryUsage();
  if (log) console.log(`=> ${label}:`);
  const start = performance.now();
  for (let i = 0; i < rounds; i++) {
    testSolution(solution, inputs, log, `[${i}] -> `);
  }
  const end = performance.now();
  const mem2 = process.memoryUsage();
  console.log(`${label} [${rounds} rounds]: `);
  console.log(`-> Performance: ${(end - start).toFixed(3)}ms`);
  console.log(`-> Memory Usage: `, memUsageDiffInMb(mem1, mem2));
  console.log();
}

module.exports = { testSolution, multiTest };
