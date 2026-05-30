//The multiline string using template literals

//this gets tricky when you don't use the correct syntax, not the single quotation mark lol ;)
const introduction = ` 
Hello!
My name is Liam De Wet.
I am learing JavaScript with LifeChoices Academy.'
Template literals make multiline strings musch easier to read.`;

console.log(introduction);

//a function that uses template literals for HTML generation
//would using ${} be the Javascript equivalent of f-strings in Python?
function createProfileCard(name, age, course) {
  return `
  <div class="profile-card">
    <h2>${name}</h2> 
    <p>Age: ${age}</p>
    <p>Course: ${course}</p>
  </div>

  `;
}

//Test HTML generation
console.log(
  createProfileCard("Liam De Wet", 19, "JavaScript for Intermediates"),
);

//convert regular functions to arrow functions

//Regular function:
//function add(a,b){
// return a + b;
// }

//arrow function version
const add = (a, b) => a + b;

//regular function:
// function square(number){
//  return number * number;
// }

//arow function version
const square = (number) => number * number;

//test arrow functions
console.log("Addition: ", add(6, 7));

console.log("\n");

console.log("Square: ", square(6));

console.log("\n");

//use arrow function with array methods
const numbers = [1, 2, 3, 4, 5];

//using map() to create a new array of double values
const doubledNumbers = numbers.map((number) => number * 2);

//using filter() to keep only even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);

//use reduce() to calc the total sum
const total = numbers.reduce((sum, number) => sum + number, 0);

//print results
console.log("Original Numbers: ", numbers);
console.log("Doubled Numbers: ", doubledNumbers);
console.log("Even Numbers Only: ", evenNumbers);
console.log("Total Sum: ", total);
