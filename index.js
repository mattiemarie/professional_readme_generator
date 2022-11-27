// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

//README file formatting
const generateHTML = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, questions }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${title}</h1>
    <p class="lead">I am from ${description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${tableOfContents}</li>
      <li class="list-group-item">LinkedIn: ${installation}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
    //Table of Contents

    //Installations
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project?',
    },
    //License

    //Contributing

    //Tests

    //Questions
  ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();