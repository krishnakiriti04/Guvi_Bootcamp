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
  var arr = userInput[0].split("");
  var mid = Math.floor(arr.length/2);
      if(arr.length%2!==0)
      {
        arr[mid]='*';    
      }
      else
      {
        arr[mid]='*';
        arr[mid-1]='*';
      }
    console.log(arr.join(""));
  //end-here
});


/*
INPUT
hello

OUTPUT
he*lo

*/
