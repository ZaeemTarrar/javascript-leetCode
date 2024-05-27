/**
 * Converts bytes to mega bytes
 * @param {number} bytes - Any value in bytes
 * @returns {number} 1.234
 */
const bytesToMegaBytes = (bytes) => {
  return bytes * 1e-6 < 0
    ? (0).toFixed(3)
    : (bytes * 1e-6).toFixed(3);
};

/**
 * Calculates the difference between two memory usage stats and
 * converts the result object values from bytes to mega bytes.
 * @param {any} mem1 - process.memoryUsage()
 * @param {any} mem2 - process.memoryUsage()
 * @returns {{
 *    rss: string,
 *    heapTotal: string,
 *    heapUsed: string,
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
function testSolution(
  solution,
  inputs = [],
  log = false,
  preText = ""
) {
  for (let i = 0; i < inputs.length; i++) {
    const Result = solution(...inputs[i]);
    if (log) console.log(`${preText}Output[${i}]: `, Result);
  }
}

/**
 * Takes your solution and tests it multiple times with
 * the given input/inputs, in accordance to the number of rounds.
 * It records overall speed and memory used by the entire test
 * run loop.
 * @param {function} solution
 * @param {array} inputs
 * @param {boolean} log - Displays solution outputs
 * @param {string} label - Title for the solution test
 * @param {number} rounds - No. of times, method if to be tested
 * @return {void}
 */
function multiTestOverall(
  solution,
  inputs = [],
  log = false,
  label = "Solution",
  rounds = 1
) {
  if (log) console.log(`=> [Overall] ${label}:`);
  const start = performance.now();
  const mem1 = process.memoryUsage();
  for (let i = 0; i < rounds; i++) {
    testSolution(
      solution,
      inputs[Math.floor(Math.round() * inputs.length)],
      log,
      `[${i}] -> `
    );
  }
  const end = performance.now();
  const mem2 = process.memoryUsage();
  const memStats = memUsageDiffInMb(mem1, mem2);
  console.log(
    `[Overall] ${label} (${rounds} rounds): `,
    {
      speed: (end - start).toFixed(3) + " ms",
    },
    {
      memory: {
        rs: memStats.rss + " mb",
        h: memStats.heapTotal + " mb",
        hu: memStats.heapUsed + " mb",
        ext: memStats.external + " mb",
      },
    }
  );
  console.log();
}

/**
 * Takes your solution and tests it multiple times with
 * the given input/inputs, in accordance to the number of rounds.
 * It records the maximum speed and memory used by all the
 * test runs individually.
 * @param {function} solution
 * @param {array} inputs
 * @param {boolean} log - Displays solution outputs
 * @param {string} label - Title for the solution test
 * @param {number} rounds - No. of times, method if to be tested
 * @return {void}
 */
function multiTestEach(
  solution,
  inputs = [],
  log = false,
  label = "Solution",
  rounds = 1
) {
  if (log) console.log(`=> [Individual] ${label}:`);
  let maxMem = { rss: 0, heapTotal: 0, heapUsed: 0, external: 0 };
  let minMem = {
    rss: Infinity,
    heapTotal: Infinity,
    heapUsed: Infinity,
    external: Infinity,
  };
  let maxSpeed = 0;
  let minSpeed = Infinity;
  for (let i = 0; i < rounds; i++) {
    const inputIndex = Math.floor(Math.round() * inputs.length);
    const mem1 = process.memoryUsage();
    const start = performance.now();
    testSolution(solution, inputs[inputIndex], log, `[${i}] -> `);
    const end = performance.now();
    const mem2 = process.memoryUsage();
    if (end - start > maxSpeed) maxSpeed = end - start;
    if (end - start < minSpeed) minSpeed = end - start;
    const memStats = memUsageDiffInMb(mem1, mem2);
    if (memStats.rss > maxMem.rss) maxMem.rss = memStats.rss;
    if (memStats.heapTotal > maxMem.heapTotal)
      maxMem.heapTotal = memStats.heapTotal;
    if (memStats.heapUsed > maxMem.heapUsed)
      maxMem.heapUsed = memStats.heapUsed;
    if (memStats.external > maxMem.external)
      maxMem.external = memStats.external;

    if (memStats.rss < minMem.rss) minMem.rss = memStats.rss;
    if (memStats.heapTotal < minMem.heapTotal)
      minMem.heapTotal = memStats.heapTotal;
    if (memStats.heapUsed < minMem.heapUsed)
      minMem.heapUsed = memStats.heapUsed;
    if (memStats.external < minMem.external)
      minMem.external = memStats.external;
  }
  console.log(
    `[Individual] ${label} (${rounds} rounds): `,
    {
      speed: {
        min: minSpeed.toFixed(3) + " ms",
        max: maxSpeed.toFixed(3) + " ms",
      },
    },
    {
      memory: {
        min: {
          rs: minMem.rss + " mb",
          h: minMem.heapTotal + " mb",
          hu: minMem.heapUsed + " mb",
          ext: minMem.external + " mb",
        },
        max: {
          rs: maxMem.rss + " mb",
          h: maxMem.heapTotal + " mb",
          hu: maxMem.heapUsed + " mb",
          ext: maxMem.external + " mb",
        },
      },
    }
  );
  console.log();
}

module.exports = { testSolution, multiTestOverall, multiTestEach };
