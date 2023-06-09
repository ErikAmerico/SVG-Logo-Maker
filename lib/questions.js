const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo:',
        name: 'text',
        validate: (answer) => {
            if (answer.length > 3) {
                return 'You can only enter up to 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal number for the characters in your logo:',
        name: 'characterColor',
        validate: (answer) => {
            const colorValidity = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(red|blue|yellow|green|purple|orange|pink|black|white|gray|brown|cyan|magenta|aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)$/i;

            if (!colorValidity.test(answer)) {
                return 'Invalid color. Please enter a valid color keyword or hexadecimal number.';
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Select a shape for your logo:',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal number for the shape of your logo:',
        name: 'shapeColor',
        validate: (answer) => {
            const colorValidity = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(red|blue|yellow|green|purple|orange|pink|black|white|gray|brown|cyan|magenta|aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)$/i;

            if (!colorValidity.test(answer)) {
                return 'Invalid color. Please enter a valid color keyword or hexadecimal number.';
            }
            return true;
        }
    }
]

module.exports = questions




