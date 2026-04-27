// Modern way: module
// import * as data from "./ES6_modules.js";

// Old way: commonjs
// let data = require("./ES6_modules");

// Destructured way
import { name, greet, age } from "./ES6_modules.js";
import add from "./ES6_modules.js"

// console.log(data);
// console.log(data.name);
// console.log(data.greet());
// console.log(data.age);

console.log(name);
console.log(greet());
console.log(age);
console.log("2+3=",add(2,3))