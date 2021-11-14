console.log('This is module');
function average(arr){
    let sum=0;
    arr.forEach(element=>{
        sum += element;
    });
    return sum/arr.length;
}
//this will export average as avg, Vinny as name and GitHub as repo here module.exports is an object that stores various variable
module.exports ={
    avg: average,
    name: "Vinny",
    repo: "GitHub"
} 