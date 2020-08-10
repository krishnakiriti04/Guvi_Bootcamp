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
  switch(parseInt(userInput[0]))
  {
      case 1: console.log(31); break;
      case 2: console.log(28); break;
      case 3: console.log(31); break;
      case 4: console.log(30); break;
      case 5: console.log(31); break;
      case 6: console.log(30); break;
      case 7: console.log(31); break;
      case 8: console.log(31); break;
      case 9: console.log(30); break;
      case 10: console.log(31); break;
      case 11: console.log(30); break;
      case 12: console.log(31); break;
      default: console.log("Error"); break;
    
  }

  //end-here
});





