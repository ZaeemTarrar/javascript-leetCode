const Sol1 = require("./solutions/sol1");
const Sol2 = require("./solutions/sol2");

const testRounds = 1000;
const inputs = [
  [[2, 7, 11, 15], 9],
  [[3, 1, 4, 11], 7],
];

function testSolution(solution, log = false) {
  for (let i = 0; i < inputs.length; i++) {
    const Result = solution(...inputs[i]);
    if (log) console.log(`Output[${i}]: `, Result);
  }
}

function multiTest(solution, label) {
  let timeLabel = `${label} -> [${testRounds} rounds]: `;
  console.time(timeLabel);
  for (let i = 0; i < testRounds; i++) {
    testSolution(solution);
  }
  console.timeEnd(timeLabel);
}

multiTest(Sol1.twoSum, "Solution1");
multiTest(Sol2.twoSum, "Solution2");
