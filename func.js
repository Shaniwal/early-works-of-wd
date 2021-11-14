console.log("This is Tut 53");

//functions

function greet(name, greetText="Greetings From JS"){ //Gre function greet when we dont pass any value for greetextetings from JS will act as the default value to function greet when we dont pass any value for greetText parameter
    let name1 = "Name1";
    console.log(greetText + " " + name)
    console.log(name + " is nice");
}
let greetText1= "Good Morning"
let name = "Vinny";
let name1 = "Shivani";
let name2 = "Ayush";
let name3 = "Govind";
let name4 = "Abhishek";
let name5 = "Mystery";
greet(name3, greetText1);
greet(name, greetText1);
greet(name1, greetText1);
greet(name4); // it uses default value assigned to greetText above


//how to make function return values


let returnVal = greet(name3);
console.log(returnVal); //wont return any value as greet function does not brings any return value

function sum(a,b,c){
    let d = a + b + c;
    return d; //by using return here we now use d to return the value of a+b+c. nothing runs after return is used in code
}
let val = sum(4,5,6); //so now val will get the value of summation of 4,5,6
console.log(val); //hence it will print 15

