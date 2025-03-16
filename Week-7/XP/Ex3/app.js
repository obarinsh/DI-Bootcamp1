const { readFile, writeFile } = require('./fileManager.js');


async function processFiles() {
    try {
        const data = await readFile("Hello World.txt");
        console.log('File contents:', data);

        await writeFile('Bye World.txt', 'Hello, Olga.!');
        console.log('File written successfully');
    } catch (err) {
        console.error('Error:', err);
    }
}

processFiles();