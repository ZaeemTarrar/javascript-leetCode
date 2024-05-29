const {
  testSolution,
  multiTestOverall,
  multiTestEach,
} = require("./../../utils/test");
const { isValid: S1 } = require("./solutions/sol1");
const { isValid: S2 } = require("./solutions/sol2");

/**
 * Title of the program, that will be display in the console
 * @type {string}
 */
const logTitle = "Valid Parenthesis";

/**
 * No. of times, the test method is intended to be called.
 * @type {number}
 */
const testRounds = 1e4;

/**
 * List of arguments as input array for solution functions.
 * @type {array}
 */
const inputs = [["()"], ["(){}[]"], ["(]"], ["({}[)]"]];

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
 */
multiTestEach(S1, inputs, false, "Solution1", testRounds);
multiTestEach(S2, inputs, false, "Solution2", testRounds);

/**
 * Multi-Testing: Recording Overall Scores
 * Test Configuration: 10000 Rounds
 */
multiTestOverall(S1, inputs, false, "Solution1", testRounds);
multiTestOverall(S2, inputs, false, "Solution2", testRounds);
