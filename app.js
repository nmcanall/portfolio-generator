// const fs = require("fs");
// const generatePage = require("./src/page-template.js");
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

// fs.writeFile("index.html", generatePage(name, github), err => {
//     if(err) throw err;

//     console.log("Portfolio complete!");
// })

const inquirer = require("inquirer");

// Prompt user for profile information
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:"
        }
    ]);
}; 

// Prompt user for project information
const promptProject = () => {
    console.log(`
=================
Add a New Project
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: "name",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)"
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What did you use this project with? (Check all that apply)",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like this to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ]);
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));