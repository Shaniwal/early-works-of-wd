// synchronus or blocking code:-> line by line execution
// asynchronus or nonblocking code:->it will appear that line by line execution not guaranteed, -callbacks will fire

const fs = require("fs");
fs.readFile("vinny.txt", "utf-8", (err, data)=>{
    console.log(err, data)
});
console.log("Hello Friends Chai PILO");

// this code is an example of asynchronus code here the code will be executed lineby line but it would not wait for the function to run and execute other codes. It will run the codes that follows the function and then the callback will fire and then results of function will get printed.
// this would not block user and the code will run without delay. Node JS is based on NON BLOCKING IO MODEL which is based on callbacks.