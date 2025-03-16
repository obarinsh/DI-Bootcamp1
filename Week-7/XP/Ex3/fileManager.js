const fs = require('fs');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(`Error reading file: ${err.message}`);
            else resolve(data);
        });
    });
}

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) reject(`Error writing file: ${err.message}`);
            else resolve(`Successfully wrote to ${filePath}`);
        });
    });
}

module.exports = { readFile, writeFile }
