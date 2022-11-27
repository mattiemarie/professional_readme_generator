// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const { default: test } = require('node:test');

//README file formatting
const generateReadme = ({ title, description, installation, usage, contributions, tests, email, github, license }) =>
  `#${title}
  ## ${license}
  ## Description ${description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#Contributions)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)
  ## Installation ${installation}
  ## Usage ${usage}
  ## Contributions ${contributions}
  ## Tests ${tests}
  ## Questions
  For any questions contact me:
  Email: ${email}
  Github: www.github.com/${github}
  ## License © ${license} All Rights Reserved.`;

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
    //Email
    {
        type: 'input',
        name: 'email',
        message: 'Please Enter your Email Address?',
    },
    //Github
    {
        type: 'input',
        name: 'github',
        message: 'Please Enter your Github Username?',
    },
     //License
     {
        type: 'list',
        name: 'License',
        message: 'Which License is affiliated with you project?',
        choices:[],
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