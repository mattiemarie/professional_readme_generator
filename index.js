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
    ]);
};

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

//Create a function to initialize app
const init = () => {
    promptUser()
        //Write to README.md file
        .then((answers) => writeFile('README.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));        
};

//Function call to initialize app
init();
