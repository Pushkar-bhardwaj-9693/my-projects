// Prompt the user to enter a word they want to repeat
let word = prompt("Enter the word you want to spam:");

// Prompt the user to enter how many times they want to repeat the word
let number = prompt("Enter how many times you want to repeat it:");

// Start a loop that runs from 1 to the value of 'number'
// 'i' is the loop counter, it starts from 1
for (let i = 1; i <= number; i++) {
    
    // Print the word on each iteration
    console.log(word);
    
    // The loop repeats 'number' times, increasing 'i' by 1 each time
    // Once 'i' is greater than 'number', the loop stops
}
