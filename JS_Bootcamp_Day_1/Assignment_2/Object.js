const person = {
  name: "John",
  age: 30,
  city: "New York",
};

delete person.age;
console.log("person", person);

//Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";

//Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";

//Print the final "person" object after performing the above operations.
console.log("Person info", person);
