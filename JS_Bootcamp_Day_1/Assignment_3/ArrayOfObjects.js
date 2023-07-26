// Create an empty array called "cars".
let cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "make2", model: "model2", year: 2020 },
  { make: "make3", model: "model3", year: 2021 },
];

// Remove the first car object from the "cars" array.
cars.splice(0, 1);
console.log(cars);

// Add a new car object to the "cars" array with the following properties:
cars.push({ make: "Honda", model: "Civic", year: 2020 });

console.log(cars);

//Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord";

console.log("Car details", cars);
