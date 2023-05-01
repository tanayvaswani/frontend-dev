/* 
JSON: JavaScript Object Notation
Used to send data 
Independent of language 
Used in many languages to communicate between 
server and webapp
*/

const myObj = {
  name: "tanay",
  hobbies: ["eat", "sleep", "repeat"],
  helllo: function () {
    console.log("Hello!");
  },
};


console.log(myObj);
console.log(myObj.name);
console.log(myObj.hobbies);
myObj.helllo()
console.log(typeof myObj);

console.log("  ");

const sendJSON = JSON.stringify(myObj);
// We lost the "helllo" method right here!
console.log(sendJSON);
console.log(typeof sendJSON);


console.log("  ");


const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);

