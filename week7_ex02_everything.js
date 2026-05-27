// Create a function called sum
function sum(n) {
  // Check if the value is a number and an integer
  if (typeof n !== "number" || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

// Test the sum function
console.log("Sum to 5:", sum(5));
console.log("Sum to 10:", sum(10));
console.log("Invalid test:", sum("hello"));
console.log("Decimal test:", sum(4.5));

// Create a function called factorial
function factorial(number) {
  let result = 1;
  let calculation = "";

  for (let i = number; i >= 1; i--) {
    result *= i;

    calculation += i;

    if (i > 1) {
      calculation += " * ";
    }
  }

  console.log(calculation + " = " + result);
}

// Test factorial
factorial(4);
factorial(5);

// Create a function called funkyMath
function funkyMath(a, b, c, d) {
  // If there are 2 arguments
  if (arguments.length === 2) {
    return a - b;
  }

  // If there are 3 arguments
  else if (arguments.length === 3) {
    return a + b + c;
  }

  // If there are 4 arguments
  else if (arguments.length === 4) {
    return (a + b) / (c + d);
  } else {
    return "Invalid number of arguments";
  }
}

// Test funkyMath
console.log("2 arguments:", funkyMath(10, 4));
console.log("3 arguments:", funkyMath(2, 3, 4));
console.log("4 arguments:", funkyMath(8, 2, 3, 5));

// Create a loop that removes odd numbers
let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  } else {
    evenNumbers.push(numbers[i]);
  }
}

// Arrange odd numbers from smallest to biggest
oddNumbers.sort(function (a, b) {
  return a - b;
});

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

// Create an object called 'me'
let me = {
  firstName: "Liam",
  lastName: "De Wet",
  age: 19,
  favouriteColour: "Blue",
  dreamCar: "BMW M4 Competition 2025",
};

// Add a new property for favourite food
me.favouriteFood = "Pizza";

// Delete the age property
delete me.age;

// Print the updated object
console.log(me);
