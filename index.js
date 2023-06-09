const inquirer = require('inquirer');
const questions = require('./lib/questions');
const writeFile = require('./lib/writeFile');

function askUser() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeFile(answers)
        })
}

askUser()