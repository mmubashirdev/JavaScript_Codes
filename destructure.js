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


let arr = ["Apple", "Banana","strawberry", "grapes"];


// Simple way
const fruit1 = arr[0], fruit2 = arr[1], fruit3 = arr[2], fruit4 = arr[3]


console.log(
  "Fruit 1: " + fruit1,
  "\n",
  "Fruit 2: " + fruit2,
  "\n",
  "Fruit 3: " + fruit3,
  "\n"
,"Fruit 4: "+fruit4,"\n",);

// Destructured way 

let [f1,f2,f3,f4] = arr;

console.log(f1,"\n",f2,"\n",f3,"\n",f4);


// only specific items destructured

let [,,strawberry ] = arr;

console.log("This is a destructed strawberry ==> ",strawberry);


// function destructed 
function dateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth();
  const y = dat.getFullYear();

  return [d,m,y];
}

const [date, month, year] = dateInfo(new Date())

console.log("Date: ", date, "\n", "Month: ", month, "\n","Year: ",year,"\n",);

const person = {
  firstName:"Muhammad",
  lastName:"Mubashir",
  age:23,
  cars:{
    brand:"BMW M5",
    model:new Date()
  }
}

let {firstName, lastName, age, country = "Pakistan", cars:{brand,model}} = person;

console.log(firstName, lastName, "is", age,"years old,\n Living in:",country, "will one day get a ",brand, "model",model  );

