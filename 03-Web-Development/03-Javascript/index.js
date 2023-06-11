// Syntax of JavaScript variables, data types, and functions
let num = 2;                    // integer variable
let str = "Hello, world!";      // string variable
let bool = true;                // boolean variable
let array = [1, 2, 3, 4, 5];    // array variable
let obj = {                     // object variable
    name: "John",
    age: 30
};

// function add(a, b) { // function that adds two numbers
//     return a + b;
// }


// console.log(num, str, bool, obj); // console.log() is a built-in function that prints to the console

// console.log("Result: ", add(5, 10)); // prints 15

// Control flow structures (if/else statements, loops)
// if (num > 5) {
//     console.log("Num is greater than 5.");
// } else {
//     console.log("Num is less than or equal to 5.");
// }

// for (let i = 0; i < array.length; i++) {
//     console.log("Rezultat: ", array[i]);
// }

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Working with the DOM (selecting and manipulating elements, adding event listeners)
// let th01 = document.querySelector("#thId01");
// console.log(th01)

// th01.style.backgroundColor = "Red";

// let th02 = document.querySelector("#thId02");
// console.log(th02)

// th01.addEventListener("click", function () {
// th01.innerHTML = "Header clicked!";
// window.open('https://www.google.com', '_blank');
// th01.style.backgroundColor = "Red";

// });

// th02.addEventListener("mouseover", function () {
//     th02.innerHTML = "Header hovered!";
// });

// Basic built-in JavaScript functions (prompt, alert, console.log)
// let name = prompt("What's your name?");
// console.log("Hello, " + name + "!");

// alert("This is an alert!");


// Explain API and HTTP requests
// We'll use the fetch() function to make an HTTP request to the Dummy JSON API
// fetch("https://dummyjson.com/posts/2")
//   .then(response => response.json())
//   .then(data => console.log(data));


// Object of a Class
// const person = {
//     name: 'John',
//     age: 30,
//     sayHello() {
//         return 'Hello, my name is ' + this.name;
//     },
//     incrementAge() {
//         this.age++;
//     }
// };

// console.log(person.sayHello()); 
// person.incrementAge();
// console.log(person.age); 

// Fetch data and display in table
// fetch("https://dummyjson.com/products/2")
//     .then(response => response.json())
//     .then(data => {
//         const table = document.getElementById("myTable");
//         const cell = table.rows[1].cells[1];

//         cell.textContent = data.description;
//     });

// NPM
// To use an NPM package, we first need to install it using the command line:
// npm install moment
// Then we can use it in our JavaScript code like this:
// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));