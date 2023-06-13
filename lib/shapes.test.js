const { describe } = require('node:test');
const { Shape, Triangle, Square, Circle } = require('./shapes');

describe('Shape', () => {
    describe('Triangle', () => {
        it('should return a blue triangle', () => {
            const shape = new Triangle();
            shape.setShapeColor("blue");
            expect(shape.renderShapeColor()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should return a red Square', () => {
            const shape = new Square();
            shape.setShapeColor("red");
            expect(shape.renderShapeColor()).toEqual(` <rect x="50" y="50" width="200" height="200" fill="red" />`);
        });
    });

    describe('Circle', () => {
        it('should return a black Circle', () => {
            const shape = new Circle();
            shape.setShapeColor("black");
            expect(shape.renderShapeColor()).toEqual(` <circle cx="150" cy="100" r="50" fill="black" />`);
        });
    });
});