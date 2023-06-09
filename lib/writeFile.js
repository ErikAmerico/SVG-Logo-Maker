const fs = require('fs');

function shapeGenerator(answers) {
    const { shape } = answers;
    let generatedShape = '';

    if (shape === 'Triangle') {
        generatedShape = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <polygon points="150,20 40,180 260,180" />\n' +
            '</svg>';
    } else if (shape === 'Square') {
        generatedShape = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <rect x="50" y="50" width="200" height="100" />\n' +
            '</svg>';
    } else if (shape === 'Circle') {
        generatedShape = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <circle cx="150" cy="100" r="50" />\n' +
            '</svg>';
    }

    return generatedShape;
}

function writeFile(answers) {
    const chosenShape = shapeGenerator(answers);

    fs.writeFile('./examples/logo.svg', chosenShape, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created successfully!');
        }
    });
}

module.exports = writeFile;

