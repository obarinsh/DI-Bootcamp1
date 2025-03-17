const fs = require('fs');

function readFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) reject(`Error reading file: ${err.message}`);
            else resolve(`File content:\n${data}`);
        });
    });
}


readFromFile('./file-data.txt')
    .then(content => console.log(content))
    .catch(error => console.error(error));