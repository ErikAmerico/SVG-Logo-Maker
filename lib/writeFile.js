const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');

function shapeGenerator(answers) {
    const { shape, text, characterColor, shapeColor } = answers;
    let selectedShape;

    switch (shape) {
        case 'Triangle':
            selectedShape = new Triangle(text, characterColor, shapeColor);
            break;
        case 'Square':
            selectedShape = new Square(text, characterColor, shapeColor);
            break;
        case 'Circle':
            selectedShape = new Circle(text, characterColor, shapeColor);
            break;
        default:
            console.log('Select a shape.')
            return;
    }

    const chosenShape = selectedShape.chosenShape();

    fs.writeFile('./examples/logo.svg', chosenShape, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    });

}

module.exports = shapeGenerator;

