const fs = require('fs') // importing file system module using require function
const path = require('path') // importing path module using require function

// './assets/starter.txt' => this method of defining the path is known as hard-coded, and there is better way of defining path, i.e. using __dirname and path module
// fs.readFile('./assets/starter.txt', 'utf8', (err, data) => { // reading the file using readFile function
//     if (err) throw err; // if there is an error, throw the error
//     console.log(data.toString()); // print the data
// })

// alternate and better approach to define path => using __dirname and path module
// fs.readFile(path.join(__dirname, 'assets', 'starter.txt'), 'utf8', (err, data) => { // reading the file using readFile function
//     if (err) throw err; // if there is an error, throw the error
//     console.log(data.toString()); // print the data
// })

console.log("Hello...")

// fs.writeFile(path.join(__dirname, 'assets', 'write-append.txt'), 'File created called write-append.txt', (err) => { // writing to the file using writeFile function
//     if (err) throw err; // if there is an error, throw the error
//     console.log('File has been written...') // print the message

//     fs.appendFile(path.join(__dirname, 'assets', 'write-append.txt'), '\nAppending the new content to write-append.txt', (err) => { 
//         if (err) throw err;
//         console.log('File has been appended...')
//     }) // this is a nested function, which appends the content to the file after writing the content to the file
// }) // this function writes content to a new file and then appends the file content to the file after it is created using appendFile function

fs.writeFile(path.join(__dirname, 'assets', 'before-rename.txt'), 'File created called before-rename.txt', (err) => { // writing to the file using writeFile function
    if (err) throw err; // if there is an error, throw the error
    console.log('File has been written...') // print the message

    fs.rename(path.join(__dirname, 'assets', 'before-rename.txt'), path.join(__dirname, 'assets', 'after-rename.txt'), (err) => { 
        if (err) throw err;
        console.log('Rename completed')
    })
}) // this is a nested function, which creates a new file and then renames the file using rename function




// fs.appendFile(path.join(__dirname, 'assets', 'test.txt'), 'Appending the new content...', (err) => { // appending to the file using appendFile function
//     if (err) throw err; // if there is an error, throw the error
//     console.log('File has been appended...') // print the message
// }) // appendFile function modifies the file content if the file already exists, otherwise it creates a new file with the content



// exit on uncaught errors
process.on('uncaughtException', (err) => { // if there is an uncaught error, print the error and exit the process
    console.error(`There was an uncaught error: ${err}`);// print the error
    process.exit(1); // exit the process
})

/* 
when above code runs, Hello... is printed first and then the content of the file is printed. This is because while the file is being read, the control is not blocked and the next line of code is executed.
*/

/*
all these functions readFile, writeFile and appendFile and even console.log are async functions, that means we don't know which will get executed befire 
*/