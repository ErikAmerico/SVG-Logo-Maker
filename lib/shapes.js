
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

    chosenShape() {

    }
}


class Triangle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);
    }
    chosenShape() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 40,180 260,180" fill="${this.shapeColor}" />
    <text x="150" y="110" text-anchor="middle" fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>
    </svg>`;
    }
}


class Square extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);

    }
    chosenShape() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
    <text x="150" y="110" text-anchor="middle" fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>
    </svg>`;
    }
}


class Circle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);
    }

    chosenShape() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
    <text x="150" y="110" text-anchor="middle" fill="${this.characterColor}" font-size="40" font-weight="bold">${this.text}</text>
    </svg>`;
    }
}


module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};