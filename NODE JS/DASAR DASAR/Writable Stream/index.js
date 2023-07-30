const fs = require('fs');

const readData = fs.readFileSync('input.txt', 'utf-8');

const writeData = fs.createWriteStream('output.txt');

writeData.write(readData)
writeData.end()
