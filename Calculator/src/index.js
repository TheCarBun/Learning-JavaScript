/**
 * @file index.js
 * @module index
 * @description A small command line calculator
 * @requires module:myMath
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author TheCarBun
 * @date 14/02/2025
 * @copyright Copyright @ 2025 by TheCarBun. All rights reserved
 */

// Internal imports
let myMath = require("./myMath");
let prompt = require("./prompt");

// External imports
let path = require("path");
global.appRoot = path.resolve(process.cwd());
let rootpath = "";
let baseFileName = path.basename(
  module.filename,
  path.extname(module.filename)
);
let namespacePrefix = `application.${baseFileName}`;

/**
 * @function application
 * @description The main program loop, the init for the entrire application
 * @returns {void}
 * @author TheCarBun
 * @date 14/02/2025
 */
function application() {
  let functionName = application.name;
  let argumentDriveInterface = false;
  let commandInput, commandResult;
  let inputDataValue1 = 0,
    inputDataValue2 = 0;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log("BEGIN main program loop");
  if (argumentDriveInterface === false) {
    while (programRunning) {
      commandInput = prompt.prompt("Enter a math operation: ");

      if (commandInput !== undefined) {
        if (
          commandInput.toUpperCase().trim() === "EXIT" ||
          commandInput.toUpperCase().trim() === "QUIT" ||
          commandInput.toUpperCase().trim() === "Q" ||
          commandInput.toUpperCase().trim() === "X"
        ) {
          console.log("END command parser");
          programRunning = false;
          console.log("END main program loop");
          console.log("Exiting, Good bye, Have a nice day!");
        } else if (commandInput.toUpperCase().trim() === "ADD") {
          inputDataValue1 = 0;
          inputDataValue2 = 0;
          inputDataValue1 = getUserInput("Enter first number to add: ");
          inputDataValue2 = getUserInput("Enter second number to add: ");
          let addResult = myMath.add(inputDataValue1, inputDataValue2);
          console.log(`Addition is ${addResult}`);
        }
      }
    }
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function getUserInput
 * @param {String} message
 */
function getUserInput(message) {
  let functionName = getUserInput.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`message is ${message}`);
  let returnData = 0;
  let inputData;
  let validInputString = false;
  while (!validInputString) {
    inputData = prompt.prompt(message);
    if (!isNaN(parseInt(inputData))) {
      validInputString = true;
      returnData = parseInt(inputData);
    }
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

let programRunning = false;
// bootStrap application
programRunning = true;
application();
