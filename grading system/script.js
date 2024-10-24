// Prompt the user to enter their marks
let marks = prompt("Enter your marks");

// Check if the marks are greater than or equal to 90
if (marks <= 100 && marks >= 90) {
    // If true, print the grade "A"
    console.log("Grade : A");
    // Provide a positive message to encourage the user
    console.log("Nice one mate, keep it up!");
}

// Check if the marks are greater than or equal to 80 and less than 90
else if (marks < 90 && marks >= 80) {
    // If true, print the grade "B"
    console.log("Grade : B");
    // Provide a motivational message for improvement
    console.log("Nice try mate, no need to worry. Next time you're gonna ace!");
}

// Check if the marks are greater than or equal to 70 and less than 80
else if (marks < 80 && marks >= 70) {
    // If true, print the grade "C"
    console.log("Grade : C");
    // Encourage the user to improve and reassure them
    console.log("Appreciable, you can do better mate, no need to worry.");
}

// Check if the marks are greater than or equal to 60 and less than 70
else if (marks < 70 && marks >= 60) {
    // If true, print the grade "D"
    console.log("Grade : D");
    // Encourage the user and suggest working harder to stand out   
    console.log("You can do better mate, it's good to pass but not to stand out. I wish you better work next time.");
}

// Check if the marks are greater than or equal to 0 and less than 60
else if (marks >= 0 && marks < 60) {
    // If true, print the grade "F"
    console.log("Grade : F");
    // Offer encouragement and motivate the user to not give up
    console.log("There's a problem but I know you can do much better next time if you focus. Don't give up, mate!");
}

// If none of the above conditions are true, the input is invalid
else {
    // Prompt the user to enter a valid score between 0 and 100
    console.log("Please enter a valid score between 0 - 100.");
}

