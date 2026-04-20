let obj = {
  name: "Mubashir",
  age: 23,
  edu: "BSSE",
};
//normal way 
let name = obj.name;
let age = obj.age;
let edu = obj.edu;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("eduation: ", edu);

//destructured way
({name, age, edu} = obj);

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Education: ", edu);


let {name: studName, age: StudAge, edu: studEdu} = obj;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Education: ", edu);


let arr = ["Apple", "Ban"]


