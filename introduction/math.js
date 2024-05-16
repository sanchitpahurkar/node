//creating an exportable module

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

module.exports = { add, sub, mul, div };


// another way to export module

// exports.add = (a,b) => a + b;
// exports.sub = (a,b) => a - b;
// exports.mul = (a,b) => a * b;
// exports.div = (a,b) => a / b;