
// Named Exports
// Inline individually
export const name = "Mubashir";


// All at once at the bottom
function greet(){
  return "Hello World!";
}
const age = 23;

function add(a,b){
  return a+b;
}

export default add;
export {greet, age};

