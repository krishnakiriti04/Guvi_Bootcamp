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
  var len = parseInt(userInput[0]);
  var arr = userInput[1].split(" ").map(Number);
  
  var notunique = arr.filter((value,index)=>arr.indexOf(value)!==index);

  console.log(notunique.join(" "));

  //end-here
});


/*
Sample Input :
7
1 1 11 121 131 141 98

Sample Output :
1
*/
