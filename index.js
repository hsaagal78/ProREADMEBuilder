
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, renderLicenseBadge,
  renderLicenseLink} = require('./lib/generateMarkdown');//this line connect to generateMarkdown.

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'username',
        message: 'Enter Github User name:'
    },   

  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description explaining the what, why, and how of your project:'
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation for building this project?'
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: 'What problem does your project solve?'
  },
  {
    type: 'input',
    name: 'learned',
    message: 'What did you learn from building this project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter instructions and examples for usage:'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators, third-party assets, or tutorials you used:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'Enter the URLs or file paths of any screenshots (separated by commas):'
  },

];

// TODO: Create a function to write README file
//The function takes a callback as the third argument, which will be executed once the file writing operation is complete.

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log('An error occurred while writing the file:', error);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README file with the provided information
    const readmeContent = generateMarkdown(answers);
    writeToFile('./README.md', readmeContent);
  }).catch((error) => {
    console.log('An error occurred:', error);
  });
}

// Function call to initialize app
init();