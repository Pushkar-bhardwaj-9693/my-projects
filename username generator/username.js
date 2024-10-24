let str = prompt("enter your name here");
str = str.replace(/\s+/g, '').toLowerCase();
console.log("@" + str.toLowerCase() + str.length);
console.log("here's your instagram username");