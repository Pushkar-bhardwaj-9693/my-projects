// Prompt the user to enter a number
let n = prompt("Enter your number");

// Initialize sum to 0 to start accumulating the total
let sum = 0;

// Loop from 1 to the entered number (n)
for (let i = 1; i <= n; i++) {
    sum += i; // Add the current number (i) to sum
}

// Print the final sum of numbers from 1 to n
console.log(sum);
