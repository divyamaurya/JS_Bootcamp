// 1. Create an empty array called "fruits".
let fruits = ["apple", "banana", "orange"];

console.log("fruits", fruits);
delete fruits[0];
console.log("delete first fruit from array", fruits);

fruits.push("grape");
console.log("added grape to the end of array", fruits);

fruits.splice(1, 1, "pear");
console.log(fruits);
