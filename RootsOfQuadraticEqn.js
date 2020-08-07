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
  roots(userInput[0].split(" "));
  //end-here
});

function roots(data)
{
    var a = data[0];
    var b = data[1];
    var c = data[2];
    var root1 = (-b + Math.sqrt((b**2) - (4*a*c)))/(2*a);
    var root2 = (-b - Math.sqrt((b**2) - (4*a*c)))/(2*a);
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
}












