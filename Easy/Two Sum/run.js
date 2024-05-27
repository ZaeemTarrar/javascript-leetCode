const { testSolution, multiTest } = require("./../../utils/test");
const Sol1 = require("./solutions/sol1");
const Sol2 = require("./solutions/sol2");

/**
 * Title of the program, that will be display in the console
 * @type {string}
 */
const logTitle = "Two Sum";

/**
 * No. of times, the test method is intended to be called.
 * @type {number}
 */
const testRounds = 1000;

/**
 * List of arguments as input array for solution functions.
 * @type {array}
 */
const inputs = [
  [[2, 7, 11, 15], 9],
  [[3, 1, 4, 11], 7],
  [[1, 4, 2, 9], 10],
];

console.log(`<=== ${logTitle} ===> \n`);

/**
 * Uni-Test with Output Verification
 */
testSolution(Sol1.twoSum, inputs, true, "[UniTest-Solution1] ");
console.log();
testSolution(Sol2.twoSum, inputs, true, "[UniTest-Solution2] ");
console.log();

/**
 * Multi-Testing
 * Test Configuration: 1000 Rounds
 * Solution1: ~ 0.845ms
 * Solution2: ~ 0.631ms
 */
multiTest(Sol1.twoSum, inputs, false, "Solution1", testRounds);
multiTest(Sol2.twoSum, inputs, false, "Solution2", testRounds);
