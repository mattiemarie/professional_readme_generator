// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const { default: test } = require('node:test');

//README file formatting
const generateReadme = ({ title, description, installation, usage, license, contributions, tests, questions }) =>
  `#${title}
  ## Description ${description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#Contributions)
  [Tests](#tests)
  [Questions](#questions)
  ## Installation ${installation}
  ## Usage ${usage}
  ## License ${license}
  ## Contributions ${contributions}
  ## Tests ${tests}
  ## Questions ${questions}`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    //Title of Project
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    //Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
    },

    //Installations
    {
        type: 'input',
        name: 'Installations',
        message: 'Installations?',
    },
    //License
    {
        type: 'input',
        name: 'License',
        message: 'Liscenses?',
    },
    //Contributions
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
    },
    //Tests
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
    },
    //Questions
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
    },
  ])

.then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md'))
})
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();