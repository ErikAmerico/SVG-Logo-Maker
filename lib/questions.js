const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal number for the characters in your logo:',
        name: 'characterColor',
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
        name: 'shapeColor'
    }
]

module.exports = questions




