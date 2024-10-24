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
    console.log("HUH FAILURE YOUR BESTFRIEND GOT 90 🤣");
}

// Check if the marks are greater than or equal to 70 and less than 80
else if (marks < 80 && marks >= 70) {
    // If true, print the grade "C"
    console.log("Grade : C");
    // Encourage the user to improve and reassure them
    console.log("LMAO DUDE YOU'RE WORTHLESS I DON'T EVEN KNOW HOW YOU GOT C FVCKIN JERK");
}

// Check if the marks are greater than or equal to 60 and less than 70
else if (marks < 70 && marks >= 60) {
    // If true, print the grade "D"
    console.log("Grade : D");
    // Encourage the user and suggest working harder to stand out   
    console.log("UNWANTED CHILD YOU HAVE BARELY PASSED GO DIE IN A DITCH");
}

// Check if the marks are greater than or equal to 0 and less than 60
else if (marks >= 0 && marks < 60) {
    // If true, print the grade "F"
    console.log("Grade : F");
    // Offer encouragement and motivate the user to not give up
    console.log("THIS ADOPTED GARBAGE HAS ALWAYS DISAPOINTED US NO EXPECTATIONS AT ALL WHY DON'T YOU JUST JUMP OFF THE ROOF AND DIE YOU PIECE OF A SHIT I DON'T WANT A KID LIKE THAT IN FACT I'M NOT EVEN LEAVING MY PROPERTY FOR YOU I'D RATHER GIVE IT TO YOU UNCLE'S SON");
}

// If none of the above conditions are true, the input is invalid
else {
    // Prompt the user to enter a valid score between 0 and 100
    console.log("Please enter a valid score between 0 - 100.");
}

