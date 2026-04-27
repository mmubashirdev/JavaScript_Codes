let name = "Mubashir";
const age = 23;

// Back ticks
const message = `Hello my name is ${name}
and I am ${age} years old`;

const add = `5+5=${5 + 5}`;
console.log(add);
console.log(message);

const isAdmin = true;

console.log(isAdmin ? "Admin" : "User");

function highlight(string, fname) {
  let Fname = fname.toUpperCase();
  return string[0] + Fname + string[1];
}
name = "Mubashir";

console.log(highlight`Hello ${name}, how are you`);
