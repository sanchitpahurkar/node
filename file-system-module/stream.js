const fs = require('fs'); // importing file system module using require function

const rs = fs.createReadStream('./assets/lorem.txt', {encoding : 'utf8'}); // creating a read stream using createReadStream function

const ws = fs.createWriteStream('./assets/new-lorem.txt');

//operations using listeners
// rs.on('data', (dataChunk) => { // this is a listener for the data event
//     ws.write(dataChunk); // writing the data chunk to the write stream
// })

// instead of using listener for data event, we can use pipe method to read and write the data, this is a optimized approach
rs.pipe(ws); // using pipe method to read and write the data