//a function that validates user input

function validateUserInput(name, age) {
  try {
    //first check if name is empty
    if (name === "") {
      throw "Name cannot be empty.";
    }

    //check if age is a number
    if (typeof age !== "number") {
      throw "Age must be a number.";
    }
    //check if age is a negative
    if (age < 0) {
      throw "Age cannot be negative.";
    }
    return "User input is valid.";
  } catch (error) {
    return "Error: " + error;
  }
}

//test validateUserInput
console.log(validateUserInput("Liam", 19));
console.log(validateUserInput("", 25));
console.log(validateUserInput("June", -5));
console.log(validateUserInput("Raees", "twenty-five"));
console.log(validateUserInput("Jackson", 22));

// a function that demonstrates multiple error types

function demonstrateErrors(value) {
  try {
    //type error
    if (typeof value !== "string") {
      throw new TypeError("Value must be a string.");
    }

    //reference error
    if (value === "reference") {
      console.log(nonExisistingVariable);
    }

    //custom error
    if (value.length < 3) {
      throw new Error("String is too short.");
    }

    return "No errors found.";
  } catch (error) {
    return error.name + ":" + error.message;
  }
}

//test demonstrateErrors
console.log(demonstrateErrors("Hello!"));
console.log(demonstrateErrors(512));
console.log(demonstrateErrors("Hi"));
console.log(demonstrateErrors("reference"));

//create helper function for string maipulation
//convert string to uppercase
function toUpperCaseString(str) {
  return str.toUpperCase();
}

//reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

//count characters in a string
function countCharacters(str) {
  return str.length;
}

//testing
console.log(toUpperCaseString("javascript"));
console.log(reverseString("frontend"));
console.log(countCharacters("developer"));

//helper functions for array opperations
//get the largest number in an array
function getLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

//calculate the sum of an array
function calculateArraySum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//remove duplicates from an array
function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

//Test the array helper functions

const numbers = [1, 2, 3, 4, 4, 5, 6];
console.log("Largest number: ", getLargestNumber(numbers));
console.log("Array sum: ", calculateArraySum(numbers));
console.log("Without duplicates: ", removeDuplicates(numbers));
