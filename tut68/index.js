console.log('THis is INDEX');
// const average = require("./mod");
//console.log(average([3,4,5]));
const mod = require("./mod")
console.log(mod.avg([3,4,5])); //here we can access average with help of mod as it is being under mod with name avg
console.log(mod.name); //here we can access name with help of mod 
console.log("This is index.js");