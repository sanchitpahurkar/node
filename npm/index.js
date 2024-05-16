const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());
console.log('hello');

/*
Nodemon : this is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

date-fns : this is a library that provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

uuid : this is a library that provides simple, fast generation of RFC4122 UUIDs.

npmjs.com : this is a website where you can find and download packages for your Node.js applications.
*/