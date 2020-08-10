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
  var arrlen = userInput[0];
  var arr1 = userInput[1].split(" ");
  var arr2 = userInput[2].split(" ");
  var res = arr1.sort().join(" ") +" "+ arr2.sort(function(a,b){return b-a;}).join(" ");
console.log(res);
  //end-here
});

/* Input:
3 3
15 23 16
357 65 10

output : 15 16 23 357 65 10
*/





