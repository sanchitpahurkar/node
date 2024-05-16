const fsPromises = require('fs').promises;
const path = require('path'); // file system module and path module are imported using require function

const fileOps = async() => { // defining an async function
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'assets', 'starter.txt'), 'utf8'); // reading the file using readFile function
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'assets', 'starter.txt')) // deletes a specified file

        await fsPromises.writeFile(path.join(__dirname, 'assets', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'assets', 'promiseWrite.txt'), "\nThis file was appended");
        await fsPromises.rename(path.join(__dirname, 'assets', 'promiseWrite.txt'), path.join(__dirname, 'assets', 'promiseRenamed.txt'));
        console.log(appendedData)

        console.log("\nLog testing\n")

        const newData = await fsPromises.readFile(path.join(__dirname, 'assets', 'promiseRenamed.txt'), 'utf8');
        console.log(newData);
    }catch (err) { // if there is an error, catch the error
        console.error(err); // print the error
    }
} // in this function, every sub-function gets executed in a sequence, because of the await keyword

fileOps(); // calling the function