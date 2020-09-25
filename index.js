var inquirer = require("inquirer");
var fs = require("fs");
var genMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
      type: "input",
      message: "What is the title of your github repository for this project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "How does the user install?",
      name: "installation"
    },
    {
      type: "input",
      message: "How is the site or file used?",
      name: "usage"
    },
    {
      type: "checkbox",
      message: "What license(s)?",
      name: "license",
      choices: ["GNU_AGPLv3", "Mozilla_Public__2.0", "Apache_2.0", "MIT"]
    },
    {
      type: "input",
      message: "How can others contribute?",
      name: "contributing"
    },
    {
      type: "input",
      message: "What tests have been completed?",
      name: "tests"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    }
];

inquirer.prompt(questions).then(function(response) {
  console.log(response);

  writeToFile(response);

});

// function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", genMarkdown.generateMarkdown(data), err => {
        if (err) {
            throw err;
        }
    });
}
