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
  var arrlen = parseInt(userInput[0]);
  var arr = userInput[1].split(" ");
  
  arr = arr.filter((str,index)=>arr.indexOf(str)===index); //used arrow function
  
  console.log(arr.join(" "));

  //end-here
});

/*
Sample Input :
5
A23 B56 B56 C79 D16

Sample Output :
A23 B56 C79 D16
*/
