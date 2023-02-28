# Team Profile Generator

## Table of Contents

1. [URL](#url)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Credits](#credits)

## URL <a id="url"></a>

## Description <a id="description"></a>

## Installation <a id="installation"></a>

This file requires Node.js and the inquirer package. Node.js can be installed
from https://nodejs.org/en/ and the inquirer package can be installed using the
Node Package Manager and the command: "npm install inquirer@8.2.4". Please note
that subsequent versions of inquirer require the ES6 import/export syntax. Due
to the use of Jest for this project and the difficulties associated with the ES6
syntax in Jest, this project does not use this syntax and subsequent versions of
inquirer will not function as expected.


## Usage <a id="usage"></a>

To use this programme, first download the repository contents including all of
the source code and if necessary, extract the files if in a zip format.
Following this, open the command line or terminal and navigate to the folder
containing the unzipped files. Type "node index.js" (without the speech marks)
and answer each of the questions in the terminal by typing an answer. Please
note that for the question around adding an engineer, intern or finishing
building the team, you will need to select an option from the list -- this can
be done using the up and down arrow keys and hitting return or enter when the
highlighted option corresponds to the option you wish to choose. Following this,
the generated index.html file can be found in the output folder within the
repository.

## Credits <a id="credits"></a>

This team profile generator was produced by myself using starter code provided
by EdX as part of their Front End Web Development bootcamp. The starter code
included all of the test files, as well as the code in the page-template.js file
and some empty pages with guidance comments to assist in the creation of classes
and importing/exporting module data. All code written in the Employee, Engineer,
Intern and Manager class files, the page-styling file and index.js was written
by me with the exception of the initial lines in index.js up to the definition
of the const renderTeam variable. Additionally, the generated html files use
icons which I had no role in designing.
