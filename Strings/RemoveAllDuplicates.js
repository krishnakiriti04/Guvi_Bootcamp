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
  //var row1 = userInput[0].split(" ").map(Number);
  //var len = parseInt(userInput[0]);
  //var marks = parseInt(row1[1])
  var arr = userInput[0]
            .split("")
            .filter((val,ind,self)=>self.lastIndexOf(val)===self.indexOf(val))
            .join("");
  
  console.log(arr);
  
  
});

/*
Input:
missssissssppppe

output
me
*/
