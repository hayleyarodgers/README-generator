// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
// Question: why did the starter code ask for this? Should it be used in the inquirer function?
const questions = [
    'What is your GitHub username?',
    'What is your email address?',
    'What is your project\'s name?',
    'Please write a short description of your project.',
    'What kind of license should your project have?',
    'What command should be run to install dependencies?',
    'What command should be run to run tests?',
    'What does the user need to know about using the repo?',
    'What does the user need to know about contributing to the repo?'
];

// Question: why is this a const? Why not just a function? ie. function promptUser(). Same principle inversed for init()
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

// Previous .then under inquirer
// .then((data) => {
//     const mdPageContent = generateMarkdown(data);
//     writeToFile('README.md', mdPageContent);
// })

// Write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md!'));
// }

// Initialize app
// Based on starter code, using an init()
// Question: why would we do an init() function, with the promptUser() function? Ie promise? This conflicts with having a separate writeToFile function??
// The app works straight away with inquirer.prompt().then()?

const init = () => {
    promptUser()
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created README.md!'))
    .catch((err) => console.error(err));
}

init();