const fs = require('fs'); // importing file system module using require function

if(!fs.existsSync('./new-dir')) { // checking if the directory already exists
    fs.mkdir('./new-dir', (err) => { // creating a new directory using mkdir function
        if (err) throw err;
        console.log('Directory created');
    })
}

if(fs.existsSync('./new-dir')) { // checking if the directory already exists
    fs.rmdir('./new-dir', (err) => { // deletes the directory using rmdir function
        if (err) throw err;
        console.log('Directory deleted');
    })
}
