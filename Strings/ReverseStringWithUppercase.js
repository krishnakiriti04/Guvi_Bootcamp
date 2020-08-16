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
  var arr = userInput[0];
  var rev = [];
  
  for(var i = arr.length-1 ; i>=0 ; i--)
  {
      rev.push(arr[i]);
  }
  rev = rev.join("");
  console.log(rev[0].toUpperCase() + rev.slice(1,rev.length));
  //end-here
});



/*
Sample Input :
jennyfer

Sample Output :
Refynnej

*/
