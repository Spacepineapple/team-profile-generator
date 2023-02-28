const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const renderTeam = require("./src/page-template.js");
const renderCSS = require("./src/page-styling.js")

const questions = [
    "What is the employee's name?",
    "What is the employee's employee ID?",
    "What is the employee's email address?",
    "What is the employee's office number?",
    "What is the employee's GitHub username?",
    "What is the employee's school?",
];

let [name, employeeID, email, office, github, school] = questions;


// TODO: Write Code to gather information about the development team members, and render the HTML file.

async function init() {
    //Asynchronously assign the inquirer prompt responses to a variable
    let team = [];
    let team_building = true;
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
    manager = new Manager(manager.name, manager.employeeID, manager.email, manager.office);
    team.push(manager);    
        
    let val = await addToTeam()

    while(val.teamBuild!=="Finish building team") {
        if (val.teamBuild === "Add engineer") {
            let engineer = await addEngineer();
            engineer = new Engineer(engineer.name, engineer.employeeID, engineer.email, engineer.github);
            team.push(engineer);
        } else if (val.teamBuild === "Add intern") {
            let intern = await addIntern();
            intern = new Intern(intern.name, intern.employeeID, intern.email, intern.school);
            team.push(intern);
        }
        val = await addToTeam();
    }       
    let html = renderTeam(team);
    writeToFile(html); 
}

async function addToTeam() {
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
    //Create a README markdown file in the "generated_readme" folder
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    createCSS();
    let fileName = outputPath;
    //Write the HTML content to file
    fs.writeFile(fileName, data, (err) => {
        //If there is an error, log it to the console. Otherwise log "Page generated!"
        err ? console.error(err) : console.log("Page generated!");
    }); 
}

function createCSS() {
    let fileName = path.join(OUTPUT_DIR, "style.css");
    let data = renderCSS();
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("CSS generated!");
    })
}

init();