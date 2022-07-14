// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions user is asked in CLI
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project\'s name?',  
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
}

// Initialize app
const init = () => {
    promptUser()
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created README.md!'))
    .catch((err) => console.error(err));
}

init();