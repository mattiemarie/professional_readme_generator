// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
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
          name: 'installation',
          message: 'Installations instructions for your project?',
      },
       //Usage
       {
        type: 'input',
        name: 'usage',
        message: 'Usage information for your project?',
    },
      //Contributions
      {
          type: 'input',
          name: 'contributions',
          message: 'Contribution Guidelines for your project?',
      },
      //Tests
      {
          type: 'input',
          name: 'tests',
          message: 'Test Instructions for your project?',
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
          name: 'license',
          message: 'Which License is affiliated with you project?',
          choices:['MIT', 'GPLv2', 'Apache', 'GPLv3'],
       },
    ]);
};

//README file formatting
const generateReadme = ({ title, description, installation, usage, contributions, tests, email, github, license }) =>
  `# ${title}
  ## Description 
  ${description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributions)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributions
  ${contributions}
  ## Tests
  ${tests}
  ## Questions
  For any questions contact me:
  Email: ${email}
  Github: www.github.com/${github}
  ## License
  ${license} © All Rights Reserved.`;

//Create a function to initialize app
const init = () => {
    promptUser()
        //Write to README.md file
        .then((answers) => writeFile('READMEgenerated.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to READMEgenerated.md'))
        .catch((err) => console.error(err));        
};

//Function call to initialize app
init();
