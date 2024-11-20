// Initialize the Array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    console.log(`Added ${number}:`, array);
}

// Function to remove a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`Removed ${number}:`, array);
    } else {
        console.log(`${number} not found in the array.`);
    }
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    console.log(`Sorted Array:`, sortedArray);
    return sortedArray;
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of numbers: ${sum}`);
    return sum;
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log(`Average of numbers: ${average}`);
    return average;
}

// Main Program
console.log("Original Array:", numbers);

// Demonstrate adding a number
addNumber(numbers, 6);

// Demonstrate removing a number
removeNumber(numbers, 3);

// Demonstrate sorting the numbers
const sortedNumbers = sortNumbers(numbers);

// Demonstrate calculating the sum
// const sum = calculateSum(numbers);

// Demonstrate calculating the average
const average = calculateAverage(numbers);

// Final state of the array
console.log("Final Array:", numbers);