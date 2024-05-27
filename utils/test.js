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
function multiTest(solution, inputs = [], log = false, label = "Solution", rounds = 1) {
  if (log) console.log(`=> ${label}:`);
  let timeLabel = `=> ${label}[${rounds} rounds]`;
  console.time(timeLabel);
  for (let i = 0; i < rounds; i++) {
    testSolution(solution, inputs, log, `[${i}] -> `);
  }
  console.timeEnd(timeLabel);
  console.log();
}

module.exports = { testSolution, multiTest };
