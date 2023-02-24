import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

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
    let manager_details = await inquirer
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
    ])
    team.append(manager_details);
    //while (team_building) {

    //}
}
