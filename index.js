// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const promptUser = 
    [
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your Project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe any installations needed to run Project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the application for your Project.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Provide any contributions to your Project if any.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select any licenses for this Project.',
            choices: [
                "none",
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there test included? If so descibe them.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email for your contact information.'
        }
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./dist/README.md";

    writeFile(filename, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
