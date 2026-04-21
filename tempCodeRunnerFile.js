
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
