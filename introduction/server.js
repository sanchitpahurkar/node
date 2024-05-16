console.log("hello world");
console.log(global);

const os = require('os');
const path = require('path'); // importing path module using require function
const math = require('./math'); // importing math local module using require function

// console.log(os.type()); // prints the operating system type
// console.log(os.version()); // prints the operating system version
// console.log(os.homedir()); // prints the home directory of the computer user

// console.log(__dirname); // prints the directory name of the current module
// console.log(__filename); // prints the file name of the current module

// console.log(path.dirname(__filename)); // prints the directory name of the current module
// console.log(path.basename(__filename)); // prints the file name of the current module
// console.log(path.extname(__filename)); // prints the extension of the current module

// console.log(path.parse(__filename)); // prints the parsed object of the current module

console.log(math.add(1,2));
console.log(math.sub(1,2));
console.log(math.mul(1,2));
console.log(math.div(1,2));
