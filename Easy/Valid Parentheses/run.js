const Speed = require("./speed");
const Space = require("./speed");

const Result1 = Speed.isValid("[([]])");
console.log("Output: ", Result1);

const Result2 = Speed.isValid("(){()}[{}]");
console.log("Output: ", Result2);

const Result3 = Speed.isValid("([}}])");
console.log("Output: ", Result3);
