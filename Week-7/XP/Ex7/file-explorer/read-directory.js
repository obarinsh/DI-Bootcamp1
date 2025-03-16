const fs = require('fs');


function readFromFolder(folderPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, data) => {
            if (err) reject(`Error reading file: ${err.message}`);
            else resolve(`Folder content: ${data}`);
        });
    });
}

const result = readFromFolder('./')

result.then((food) => {
    console.log(food)
})
