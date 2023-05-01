//------------------------- Factory function

// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;

//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} pizza!`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

//-------------------------- Classes in JS

class Pizza {
  crust = "original"; // public field
  #sauce = "traditional"; // private field
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize; // property with parameter (private)
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);

// //Sub-Class
// class SpecialityPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }

//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }

// const mySpeciality = new SpecialityPizza("Medium");
// mySpeciality.slice();
