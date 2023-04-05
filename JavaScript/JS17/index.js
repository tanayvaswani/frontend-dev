// Objects in JS
// key-value pairs in curly braces

// Simple Object
// const myObj = { key: "value" }

// const myObj = { name: "tanay" };
// console.log(myObj.name);

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["eat", "sleep", "code", "repeat"],
//   beverage: {
//     morning: "Shake",
//     afternoon: "Iced Tea",
//   },
//   // functions can be added inside an object
//   action: function () {
//     return `Time for ${this.beverage.morning}`;
//   },
// };

// console.log(anotherObj.answer);
// console.log(anotherObj["answer"]);

// console.log(anotherObj.hobbies[2]);
// console.log(anotherObj.beverage.afternoon);
// console.log(anotherObj.action());

// -------------------------------------------------------------

// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "Vroooommmm!";
//   },
// };

// const truck = Object.create(vehicle);
// truck.doors = 2;

// console.log(truck);
// console.log(truck.wheels); // Inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Woooooshhhhhh!";
// };

// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);
// tesla.engine = function () {
//   return "Shhhuussshhh!";
// };
// console.log(tesla.wheels);
// console.log(tesla.engine());

// ----------------------------------------------

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

// delete band.drums;

// console.log(band.hasOwnProperty("drums"));
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]} !`);
// }

// Destructuring Objects

const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(guitar);

function sings({ vocals }) {
  return `${vocals} sings!`;
}

console.log(sings(band));
