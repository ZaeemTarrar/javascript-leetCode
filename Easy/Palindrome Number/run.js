const {
  testSolution,
  multiTestOverall,
  multiTestEach,
} = require("./../../utils/test");
const { isPalindrome: S1 } = require("./solutions/sol1");
const { isPalindrome: S2 } = require("./solutions/sol2");

/**
 * Title of the program, that will be display in the console
 * @type {string}
 */
const logTitle = "Palindrome Number";

/**
 * No. of times, the test method is intended to be called.
 * @type {number}
 */
const testRounds = 1e4;

/**
 * List of arguments as input array for solution functions.
 * @type {array}
 */
const inputs = [[-121], [121], [10]];

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
 * Solution1: ~ 0.531ms, 0.273mb
 * Solution2: ~ 0.051ms, 0.137mb
 */
multiTestEach(S1, inputs, false, "Solution1", testRounds);
multiTestEach(S2, inputs, false, "Solution2", testRounds);

/**
 * Multi-Testing: Recording Overall Scores
 * Test Configuration: 10000 Rounds
 * Solution1: ~ 0.630ms, 0.195mb
 * Solution2: ~ 0.346ms, 0.009mb
 */
multiTestOverall(S1, inputs, false, "Solution1", testRounds);
multiTestOverall(S2, inputs, false, "Solution2", testRounds);
