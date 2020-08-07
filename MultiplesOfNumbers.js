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
  var num = userInput[0];
  var mul = [];
for(var i=1;i<4;i++)
{
   mul.push(num * i);
}
console.log(mul[0]+" "+mul[1]+" "+mul[2]);
  //end-here
});
