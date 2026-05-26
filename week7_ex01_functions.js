//fucntion called multiply that takes 3 parameters

function multiply(num1, num2, num3) {
  //chekc if numbers are different
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "Numbers must not be the same";
  }

  return num1 * num2 * num3;
}

//call the function to test
console.log("Multiply result: ", multiply(2, 4, 6));

//function expression callled 'convertToSeconds
const convertToSeconds = function (minutes) {
  return minutes * 60;
};

//test
console.log("5 Minutes in Seconds: ", convertToSeconds(5));

//function for fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("100F in Celcius: ", fahrenheitToCelsius(100));

//function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reversed String: ", reverseString("I love Javascript!"));

//function that counts vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log("Number of vowels: ", countVowels("Javascript part 2"));

//create isPrime function
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("2 is prime: ", isPrime(2));
console.log("4 is prime: ", isPrime(4));
console.log("6 is prime: ", isPrime(6));
console.log("300 is prime: ", isPrime(300));
