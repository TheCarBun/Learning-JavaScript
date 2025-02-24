/**
 * @file myMath.js
 * @module myMath
 * @description Implements Math functions
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author TheCarBun
 * @date 23/02/2025
 * @copyright Copyright @ 2025 by TheCarBun. All rights reserved
 */

// Internal imports

// External imports
let path = require("path");
let baseFileName = path.basename(
  module.filename,
  path.extname(module.filename)
);
let namespacePrefix = `application.${baseFileName}`;

/**
 * @function add
 * @description Adds two numbers together and returns the result
 * @param {integer} data1
 * @param {integer} data2
 * @returns {integer}
 * @author TheCarBun
 * @date 23/02/2025
 */
function add(data1, data2) {
  let functionName = add.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`data1 is ${data1}`);
  console.log(`data2 is ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 + data2;
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function subtract
 * @description Subtracts two numbers together and returns the result
 * @param {integer} data1
 * @param {integer} data2
 * @returns {integer}
 * @author TheCarBun
 * @date 23/02/2025
 */
function subtract(data1, data2) {
  let functionName = subtract.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`data1 is ${data1}`);
  console.log(`data2 is ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 - data2;
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function multiply
 * @description Multiplies two numbers together and returns the result
 * @param {integer} data1
 * @param {integer} data2
 * @returns {integer}
 * @author TheCarBun
 * @date 23/02/2025
 */
function multiply(data1, data2) {
  let functionName = multiply.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`data1 is ${data1}`);
  console.log(`data2 is ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 * data2;
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function divide
 * @description Divides two numbers together and returns the result
 * @param {integer} data1
 * @param {integer} data2
 * @returns {integer}
 * @author TheCarBun
 * @date 23/02/2025
 */
function divide(data1, data2) {
  let functionName = divide.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`data1 is ${data1}`);
  console.log(`data2 is ${data2}`);
  let returnData = 0;
  if (data1 && data2) {
    returnData = data1 / data2;
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function factorial
 * @description Returns factorial of an integer
 * @param {integer} data1
 * @returns {integer}
 * @author TheCarBun
 * @date 23/02/2025
 */
function factorial(data) {
  let functionName = factorial.name;
  console.log(`BEGIN ${namespacePrefix} function`);
  console.log(`data1 is ${data}`);
  let returnData = 0;
  if (data === 0) {
    returnData = 1;
  } else {
    returnData = data * factorial(data - 1);
  }
  console.log(`returnData is ${returnData}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

module.exports = {
  ["add"]: (data1, data2) => add(data1, data2),
  ["subtract"]: (data1, data2) => subtract(data1, data2),
  ["multiply"]: (data1, data2) => multiply(data1, data2),
  ["divide"]: (data1, data2) => divide(data1, data2),
  ["factorial"]: (data) => factorial(data),
};
