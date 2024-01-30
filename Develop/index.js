// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    }
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    }
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    }
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?'
    }
    {
        type: 'input',
        name: 'questions',
        message: 'How can others contact you with questions?(email, github, etc.)'
    }
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project use?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
