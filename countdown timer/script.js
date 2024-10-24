// Ask the user to enter the starting number for the countdown
let startNumber = prompt("Enter the starting number for the countdown:");

// Convert the input to a number (in case the input is a string)
startNumber = Number(startNumber);

// Use a loop to count down from the starting number to 0
for (let i = startNumber; i >= 0; i--) {
    console.log(i); // Print each number
}

// When the countdown is over, print a message
console.log("Countdown complete!");
