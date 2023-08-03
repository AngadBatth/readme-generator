const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMD");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter your github username: ",
      name: "git",
    },
    {
      type: "input",
      message: "Please enter your email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the title of your project: ",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter the description of your project: ",
      name: "desc",
    },
    {
      type: "input",
      message: "Please enter the installation instructions for your project: ",
      name: "install",
    },
    {
      type: "input",
      message: "Please enter the usage information for your project: ",
      name: "usage",
    },
    {
      type: "input",
      message: "Please enter the contribution guidelines for your project: ",
      name: "contrib",
    },
    {
      type: "input",
      message: "Please enter the test instructions for your project: ",
      name: "test",
    },
    {
      type: "list",
      message: "Please select a license for your project: ",
      name: "license",
      choices:[
        'MIT',
        'Apache 2.0',
        'GNU GPL v3',
        ],
    },
  ])
  .then((data) => {

    var completedMD = generateMD(data);

    fs.writeFile("README.md", completedMD, (err) =>
      err ? console.log(err) : console.log("Created README.md file")
    );

  });

function init() {}

init();