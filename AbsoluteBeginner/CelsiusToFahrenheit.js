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
  var fahrenheit = 32 + ((9/5) * userInput[0]);
  console.log(fahrenheit.toFixed(2));
  //end-here
});






