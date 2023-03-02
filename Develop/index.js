// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
{
    message: "What is the title of this application?",
    name: "title"
},
{
    message: "What is this application for?",
    name: "useage"
},
{
    message: "How do you use the application?",
    name: "howUse"
},
{
    message: "How do you install this application?",
    name: "install"
},
{
    message: "How would you report an issue?",
    name: "reporting"
},
{
    message: "How would someone make contributions?",
    name: "contributions"
},
{
    message: "What instructions would you give to use this application?",
    name: "instructions"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(() => {   
        console.log("Making ReadMe");
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
