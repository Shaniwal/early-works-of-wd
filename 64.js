// how to use modules


const fs = require("fs");
let text = fs.readFileSync("ship.txt","utf-8");
text = text.replace("Sea", "oceans");
 
console.log("The content of the file is");
console.log(text);

console.log("Creating a new fie");
fs.writeFileSync("vinny.txt",text);