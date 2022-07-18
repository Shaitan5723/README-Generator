// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions of your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Where will your project be used?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please input the licenses of your project.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions of your project?',
    },
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
  ]


// // TODO: Create a function to write README file
// fs.writeFile(fileName, data, err => {
//   console.log(fileName)
//   console.log(data)
//     if (err) {
//       return console.error(err)
//     }
//     });


const init = () => {
  inquirer.prompt(questions)
    .then((data) => fs.writeFile('README.md', generateMarkdown(data), (err)));
    // .then(() => console.log('Successfuly created a new README file'))
    // .catch((err) => console.error(err));
};

// Function call to initialize app
init();