const {
  testSolution,
  multiTestOverall,
  multiTestEach,
} = require("./../../utils/test");
const { twoSum: S1 } = require("./solutions/sol1");
const { twoSum: S2 } = require("./solutions/sol2");

/**
 * Title of the program, that will be display in the console
 * @type {string}
 */
const logTitle = "Two Sum";

/**
 * No. of times, the test method is intended to be called.
 * @type {number}
 */
const testRounds = 1e4;

/**
 * List of arguments as input array for solution functions.
 * @type {array}
 */
const inputs = [
  [[2, 7, 11, 15], 9],
  [[3, 1, 4, 11], 7],
  [[1, 4, 2, 9], 10],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

console.log(`<=== ${logTitle} ===> `);

/**
 * Test with Output Verification
 */
console.log("\n[UniTest-Solution1]: ");
testSolution(S1, inputs, true);
console.log("\n[UniTest-Solution2]: ");
testSolution(S2, inputs, true);
console.log();

/**
 * Uni-Testing: Recording Max Individual Score
 * Test Configuration: 10000 Rounds
 * Solution1: ~ 0.986ms, 0.126mb
 * Solution2: ~ 0.135ms, 0.068mb
 */
multiTestEach(S1, inputs, false, "Solution1", testRounds);
multiTestEach(S2, inputs, false, "Solution2", testRounds);

/**
 * Multi-Testing: Recoding Overall Scores
 * Test Configuration: 10000 Rounds
 * Solution1: ~ 0.671ms, 0.197mb
 * Solution2: ~ 0.355ms, 0.009mb
 */
multiTestOverall(S1, inputs, false, "Solution1", testRounds);
multiTestOverall(S2, inputs, false, "Solution2", testRounds);
