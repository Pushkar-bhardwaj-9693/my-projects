# Price Discount Calculator

This project calculates a 10% discount on a list of prices. The program iterates through an array of original prices, applies the discount, and displays both the original and the discounted prices in the console.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To run this project, you can copy the code and paste it into a JavaScript environment, such as the web browser console or any JavaScript editor.

## Usage

1. Open your web browser's console or your preferred JavaScript environment.
2. Modify the `price` array in the code to include any prices you want to calculate discounts for.
3. Run the code to see the original and discounted prices logged in the console.

### Example

```javascript
let price = [250, 645, 300, 900, 50]; // Array of original prices
let idx = 0; // Initialize index to track the current position in the array

// Loop through each price in the array
for (let dis of price) {
    console.log(`value at index ${idx} = ${dis}`); // Log original price
    let offer = dis / 10; // Calculate 10% discount
    price[idx] = price[idx] - offer; // Apply discount to original price
    console.log(`value after offer is ${price[idx]}`); // Log discounted price
    idx++; // Increment index for the next iteration
}

// Example output for the initial array [250, 645, 300, 900, 50]:
// value at index 0 = 250
// value after offer is 225
// value at index 1 = 645
// value after offer is 580.5
// value at index 2 = 300
// value after offer is 270
// value at index 3 = 900
// value after offer is 810
// value at index 4 = 50
// value after offer is 45
