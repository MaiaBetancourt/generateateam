// Node Modules
const path = require("path");
const fs = require("fs");

// Contructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,

const {
  addEmployee,
  internPrompt,
  engineerPrompt,
  managerPrompt,
} = require("./prompts");

managerPrompt().then(function (manager) {
  console.log(manager);
  main();
});

function main() {
    addEmployee().then(function ({ engineerOrIntern }) {
        if (engineerOrIntern === "Engineer") {
          // prompt for engineer deatils
          engineerPrompt().then(function (engineer) {
            console.log(engineer);
            main();
          });
        } else if (engineerOrIntern === "Intern") {
          // prompt for intern details
          internPrompt().then(function (intern) {
            console.log(intern);
            main();
          });
        } else {
          // write file
          employees.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
          employees.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
          employees.push(new Intern(intern.name, intern.id, intern.email, intern.school));
          
          const peoples = render(employees);
          fs.writeFile("main.html", peoples, function(err) {
            if (err) {
              throw err;
            }
            console.log("Succes wrote to file");
          })
          // fs.writeFile("main.html", render(employees), =>  {
          //   console.log(employees);
          // })
        }
      });
}

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
