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
  var num = parseInt(userInput[0]);
  var sum = 0;
  while(num>0)
  {
      sum = sum + num%10;
      num = parseInt(num/10);
  }
  
  if(sum%3===0)
    console.log("yes");
  else
    console.log("not");
  
  

  //end-here
});


/*
You are given a task to tell whether the number is pure or not. A pure number is a number whose sum of digits is multiple of 3.

O(1) time and O(1) space

Input Description:
You are given a number n.

Output Description:
Print yes if it is pure else not

Sample Input :
13
Sample Output :
not

*/






