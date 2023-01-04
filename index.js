// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// these are the questions that the user will answer in order to generate their readme file
const questions = ['What is the title of your project?','Please enter your email.','Please enter your GitHub username.','Please describe your project.','Provide installation instructions for your project.','Please provide instructions on how to use your project.','How can someone contribute to your project?','What are the testing guidelines to your project?','Please select (if any) the licences that must be applied to your README file.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
    fs.writeFile('./dist/'+fileName + '.md', data, err => {
      if (err) {
        reject(err);
        // returns out of the function in order to ensure the promise does not also execute the resolve function
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if(titleInput){
                    return true
                }else{
                    console.log('Please enter the title of your project to proceed.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name:'email',
            message:questions[1],
            validate: emailInput => {
                if(emailInput){
                    return true
                }else{
                    console.log('Please enter your email to proceed.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name:'github',
            message:questions[2],
            validate: githubInput => {
                if(githubInput){
                    return true
                }else{
                    console.log('Please enter your github username to proceed.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name:'description',
            message:questions[3],
            validate: descriptionInput => {
                if(descriptionInput){
                    return true
                }else{
                    console.log('Please describe your project to proceed.')
                    return false
                }
            }
        },
        {
            type:'input',
            name:'installation',
            message: questions[4]
        },
        {
            type:'input',
            name:'instructions',
            message: question[5]
        },
        {
            type:'input',
            name:'contribution',
            message: question[6]
        },
        {
            type:'input',
            name:'testing',
            message: question[7]
        },
        {
            type:'input',
            name:'licensing',
            message: question[8],
            choices: ['MIT License','No License']
        },
        {
            type:'input',
            name:'fileName',
            message: 'Finally, name your README file!!!',
            validate: nameInput =>{
                if(nameInput){
                    return true
                }else{
                    console.log('Please name your file to finalize creation.')
                    return false
                }
            }
        }
    ])
}

// Function call to initialize app
init();
