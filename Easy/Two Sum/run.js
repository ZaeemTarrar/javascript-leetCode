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
const testRounds = 10000;

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
testSolution(Sol1.twoSum, inputs, true);
console.log("\n[UniTest-Solution2]: ");
testSolution(Sol2.twoSum, inputs, true);
console.log();

/**
 * Uni-Testing
 * Test Configuration: 1 Rounds
 * Solution1: ~ 0.016ms, 0.121mb
 * Solution2: ~ 0.005ms, 0.001mb
 */
multiTest(Sol1.twoSum, inputs, false, "Solution1", 1);
multiTest(Sol2.twoSum, inputs, false, "Solution2", 1);

/**
 * Multi-Testing
 * Test Configuration: 10000 Rounds
 * Solution1: ~ 8.075ms, 0mb
 * Solution2: ~ 1.272ms, 0.729mb
 */
multiTest(Sol1.twoSum, inputs, false, "Solution1", testRounds);
multiTest(Sol2.twoSum, inputs, false, "Solution2", testRounds);
