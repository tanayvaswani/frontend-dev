// USER INPUT 

// let myBoolean = confirm("OK === True\n Cancel === False"); 
// console.log(myBoolean);
// alert("Hello, World..!");

let name = prompt("Please enter your name: ");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}
else {
    console.log("You didn't enter your name.")
}

