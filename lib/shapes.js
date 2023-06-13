
class Shape {
    constructor(text, characterColor, shapeColor) {
        this.text = text;
        this.characterColor = characterColor;
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    };

    setCharacterColor(characterColor) {
        this.characterColor = characterColor;
    };

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    };

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
             ${this.renderShapeColor()}
            ${this.renderText()}
            </svg>`
    }
}


class Triangle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);
    }
    renderShapeColor() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    };

    renderText() {
        return `
        <text x="150" y="110" text-anchor="middle"
            fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>`
    };
}


class Square extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);

    }
    renderShapeColor() {
        return ` <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`
    };

    renderText() {
        return `
        <text x="150" y="110" text-anchor="middle" fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>`
    };
}


class Circle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);
    }

    renderShapeColor() {
        return ` <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`
    };

    renderText() {
        return `
        <text x="150" y="110" text-anchor="middle" fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>`
    };
}


module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};