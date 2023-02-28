//Import the Manager, Engineer and Intern classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Import the necessary packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Create a variable to hold the output directory 
const OUTPUT_DIR = path.resolve(__dirname, "output");
//Create a variable with the filepath for the generated HTML page
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Import the function to generate the HTML code
const renderTeam = require("./src/page-template.js");
//Import the function to generate the CSS code
const renderCSS = require("./src/page-styling.js")

//Create an array of questions for use in application
const questions = [
    "What is the employee's name?",
    "What is the employee's employee ID?",
    "What is the employee's email address?",
    "What is the employee's office number?",
    "What is the employee's GitHub username?",
    "What is the employee's school?",
];

//Destruct the questions
let [name, employeeID, email, office, github, school] = questions;

//Create a function to initialise the application
async function init() {
    let team = [];
    let team_building = true;
    console.log("Please add manager details");
    //Asynchronously assign the inquirer prompt responses to a variable
    let manager = await inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: name,
        },
        {
            type: "input",
            name: "employeeID",
            message: employeeID,
        },
        {
            type: "input",
            name: "email",
            message: email,
        },
        {
            type: "input",
            name: "office",
            message: office,
        },
    ]);
    //Create an instance of the Manager class
    manager = new Manager(manager.name, manager.employeeID, manager.email, manager.office);
    //Add that instance to the team array
    team.push(manager);    
    
    //Create a variable to hold the result of the users' choice
    let val = await addToTeam()

    //As long as the user hasn't selected 'finish building team', keep running
    while(val.teamBuild!=="Finish building team") {
        if (val.teamBuild === "Add engineer") {
            let engineer = await addEngineer();
            //Create a new instance of the Engineer class with the user's responses
            engineer = new Engineer(engineer.name, engineer.employeeID, engineer.email, engineer.github);
            team.push(engineer);
        } else if (val.teamBuild === "Add intern") {
            let intern = await addIntern();
            //Create a new instance of the Intern class with the user's responses
            intern = new Intern(intern.name, intern.employeeID, intern.email, intern.school);
            team.push(intern);
        }
        //Prompt the user to select again
        val = await addToTeam();
    }
    //Call the renderTeam function using the team array to generate the raw HTML code
    let html = renderTeam(team);
    //Save that code to a file
    writeToFile(html); 
}

async function addToTeam() {
    //Prompt user to select whether to add to team or finish building
    return await inquirer
    .prompt([
        {
            type: "list",
            name: "teamBuild",
            message: "Add to team?",
            choices: [
                "Add engineer",
                "Add intern",
                "Finish building team",
            ],
        },
    ])
}

async function addEngineer() {
    //Prompt user to give details about engineer
    return await inquirer
    .prompt([
        {
        type: "input",
        name: "name",
        message: name,
    },
    {
        type: "input",
        name: "employeeID",
        message: employeeID,
    },
    {
        type: "input",
        name: "email",
        message: email,
    },
    {
        type: "input",
        name: "github",
        message: github,
    },
])
}

async function addIntern() {
    //Prompt user to add details about intern
    return await inquirer
    .prompt([
        {
        type: "input",
        name: "name",
        message: name,
    },
    {
        type: "input",
        name: "employeeID",
        message: employeeID,
    },
    {
        type: "input",
        name: "email",
        message: email,
    },
    {
        type: "input",
        name: "school",
        message: school,
    },
])
}

function writeToFile(data) {
    //If the output directory does not already exist, create it
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    //Generate a style.css file
    createCSS();
    //Create a variable to hold the desired file path for the generated file
    let fileName = outputPath;
    //Write the HTML content to file
    fs.writeFile(fileName, data, (err) => {
        //If there is an error, log it to the console. Otherwise log "Page generated!"
        err ? console.error(err) : console.log("Page generated!");
    }); 
}

function createCSS() {
    //Create a variable to hold the desired file path for the generated file
    let fileName = path.join(OUTPUT_DIR, "style.css");
    //Get the CSS code
    let data = renderCSS();
    //Write the CSS code to file
    fs.writeFile(fileName, data, (err) => {
        //If there is an error, log it to the console. Otherwise log "CSS generated!"
        err ? console.error(err) : console.log("CSS generated!");
    })
}

init();