// const fs = require("fs");
// const generatePage = require("./src/page-template.js");
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;

// fs.writeFile("index.html", generatePage(name, github), err => {
//     if(err) throw err;

//     console.log("Portfolio complete!");
// })

const inquirer = require("inquirer");
inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    }])
    .then(answers => {
        return console.log(answers)
    });