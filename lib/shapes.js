
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
}



class Triangle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);

    }
}


class Square extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);

    }
}


class Circle extends Shape {
    constructor(text, characterColor, shapeColor) {
        super(text, characterColor, shapeColor);

        this.svgCode = '<circle cx="25" cy="75" r="20" />';
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};