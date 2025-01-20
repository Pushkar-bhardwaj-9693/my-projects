let input = prompt("enter your number");

let newarr = [];

for (let i = 1; i <= input; i++) {
    newarr[i - 1] = i;
}

console.log(newarr);

let sum = newarr.reduce((prev, curr) => {
    return prev + curr;
})

console.log("the sum of the numbers is", sum);


let product = newarr.reduce((prev, curr) => {
    return prev * curr;
})

console.log("the product of the numbers is", product);