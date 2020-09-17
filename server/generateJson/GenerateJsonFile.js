const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

function GenerateJsonFile(data, ...name) {
    writeFileSync(
        join(__dirname, '..', '..', 'database', ...name),
        JSON.stringify(data, undefined, 2)
    );
}

function createFolder(...name) {
    const path = join(__dirname, '..', '..', 'database', ...name);
    if (!existsSync(path)) {
        mkdirSync(path);
    }
}

// init database folder
createFolder();

module.exports = { createFolder, GenerateJsonFile };
