//a global variable called globalCount

let globalCount = 10;

//a function that demonstrates local scope
function showLocalScope() {
  let localCount = 5;

  console.log("Inside function - local count: ", localCount);
  console.log("Inside function- Global Count: ", globalCount);
}

//calling the function
showLocalScope();

//a function that tries to modify both varibales
function modifyVariables() {
  //modify global
  globalCount += 5;

  let localCount = 20;

  localCount += 10;

  console.log("Modified Global Count: ", globalCount);
  console.log("Modified Local Count: ", localCount);
}

//calling the function
modifyVariables();

console.log("\n");

//student constrctor function
function Student(firstName, lastName, age, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.course = course;

  //method
  this.introduce = function () {
    return (
      "Hi, my name is " +
      this.firstName +
      " " +
      this.lastName +
      ", I am " +
      this.age +
      " years old and I am studying " +
      this.course +
      "."
    );
  };
}

//the several student instances
const student1 = new Student("Liam", "De Wet", 19, "Web Development");
const student2 = new Student("Tristan", "Hendriks", 24, "Data Science");
const student3 = new Student("Aidan", "Johnson", 26, "Cybersecurity");

//print the student information
console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());

//an object literal with nested properties

const person = {
  firstName: "Noah",
  lastName: "Abrahams",

  address: {
    street: "22 Ladies Mile Road",
    city: "Cape Town",
    country: "South Africa",
  },

  hobbies: {
    hobby1: "Coding",
    hobby2: "Cooking",
    hobby3: "Chess",
  },
};

console.log("\n");

//print nested object properties
console.log("My friend's name is " + person.firstName + " " + person.lastName);
console.log("He lives at " + person.address.street);
console.log("in " + person.address.city);
console.log("And his favorite hobby is " + person.hobbies.hobby1);
