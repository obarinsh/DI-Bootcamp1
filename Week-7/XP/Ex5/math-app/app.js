const math = require('./math.js');
const _ = require('lodash');

console.log("Addition:", math.add(5, 3));
console.log("Multiplication:", math.multiply(4, 2))
let nums = [2, 4, 6, 8, 0]
console.log("Average:", _.mean(nums))
console.log("Min num is:", _.min(nums))
console.log("Max num is:", _.max(nums))