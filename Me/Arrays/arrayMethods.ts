// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Accessing array elements
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];

// Updating array elements
numbers[2] = 10;

// Iterating through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Iterating through the array using forEach
numbers.forEach((num) => {
  console.log(num);
});

// Adding elements to the end of the array
numbers.push(6);
numbers.push(7);

// Removing the last element from the array
const removedElement = numbers.pop();

// Creating a new array from an existing array using map
const squaredNumbers = numbers.map((num) => num * num);

// Filtering elements based on a condition using filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Checking if an element exists in the array using includes
const includesNumber = numbers.includes(3);

// Finding the index of an element in the array using indexOf
const index = numbers.indexOf(4);

// Removing elements from the array using splice
numbers.splice(1, 2); // Removes 2 elements starting from index 1

// Concatenating arrays using concat
const newArray = numbers.concat([8, 9, 10]);

// Sorting the array
numbers.sort((a, b) => a - b); // Ascending order

// Reversing the array
numbers.reverse();

// Creating a copy of the array using slice
const copyArray = numbers.slice();

console.log('Original Array:', numbers);
console.log('Squared Numbers:', squaredNumbers);
console.log('Even Numbers:', evenNumbers);
console.log('Includes Number 3:', includesNumber);
console.log('Index of Number 4:', index);
console.log('Removed Element:', removedElement);
console.log('New Array:', newArray);
console.log('Copied Array:', copyArray);
