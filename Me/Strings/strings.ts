// Define a string
const message: string = "Hello, World!";

// Accessing characters in a string
const firstChar: string = message[0];
const lastChar: string = message[message.length - 1];

// Concatenating strings
const name: string = "John";
const greeting: string = "Hello, " + name + "!";

// Template literals (string interpolation)
const age: number = 30;
const info: string = `Name: ${name}, Age: ${age}`;

// Converting a string to uppercase and lowercase
const upperCaseMessage: string = message.toUpperCase();
const lowerCaseMessage: string = message.toLowerCase();

// Splitting a string into an array of substrings
const words: string[] = message.split(" ");

// Checking if a string contains a substring
const containsHello: boolean = message.includes("Hello");
const containsHi: boolean = message.includes("Hi");

// Finding the index of a substring in a string
const indexOfHello: number = message.indexOf("Hello");
const indexOfHi: number = message.indexOf("Hi"); // Returns -1 if not found

// Extracting a substring
const substring1: string = message.slice(0, 5); // "Hello"
const substring2: string = message.substring(7, 12); // "World"
const substring3: string = message.substr(7, 5); // "World"

// Removing leading and trailing whitespaces from a string
const stringWithSpaces: string = "   Hello, World!   ";
const trimmedString: string = stringWithSpaces.trim();

console.log("Original Message:", message);
console.log("First Character:", firstChar);
console.log("Last Character:", lastChar);
console.log("Greeting:", greeting);
console.log("Info:", info);
console.log("Uppercase Message:", upperCaseMessage);
console.log("Lowercase Message:", lowerCaseMessage);
console.log("Words:", words);
console.log("Contains 'Hello':", containsHello);
console.log("Contains 'Hi':", containsHi);
console.log("Index of 'Hello':", indexOfHello);
console.log("Index of 'Hi':", indexOfHi);
console.log("Substring 1:", substring1);
console.log("Substring 2:", substring2);
console.log("Substring 3:", substring3);
console.log("Trimmed String:", trimmedString);
