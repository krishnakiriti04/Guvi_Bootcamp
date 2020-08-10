// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  largest(userInput);
  //end-here
});



var largest = function(data){
    a = data[0];
    b = data[1];
    c = data[2];
    if(a>b)
        (a>c)?console.log(a):console.log(c);
    else
        (b>c)?console.log(b):console.log(c);
}





