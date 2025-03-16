const fs = require('fs');




function readFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile('source.txt', 'utf8', (err, data) => {
            if (err) reject(`Error reading file: ${err.message}`);
            else resolve(`File content: ${data}`);
        });
    });
}

function writeToFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('destination.txt', content, 'utf8', (err) => {
            if (err) reject(`Error writing file: ${err.message}`);
            else resolve(`File written successfully to ${filePath}`);
        });
    });
}

async function copyContent() {
    const filePath = "./"
    const text = await readFromFile(filePath)
    await writeToFile(filePath, text)
}

copyContent()
