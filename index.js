const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

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
      type: 'list',
      name: 'license',
      message: 'Please input the licenses of your project.',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'No License'],
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

const init = () => {
  inquirer.prompt(questions)
    .then((data) => fs.writeFile('README.md', generateMarkdown(data), (err) =>{
      if (err) {
        return console.error(err)
      } else {
        return console.log("README generated!")
      }
    }));
};

// Function call to initialize app
init();