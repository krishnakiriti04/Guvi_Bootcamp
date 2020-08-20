// Getting input via STDIN

/*
Write a program to get a string S, Type of conversion 
(1 - Convert to Lowercase, 2 - Convert to Uppercase) T, and integer P . Convert the case of the letters in the positions which are multiples of P.(1 based indexing).
*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
  var str = userInput[0].split("");
  var casetype = parseInt(userInput[1]);
  var multipleOf = parseInt(userInput[2]);
  
  str.unshift("");
  for(var i=0;i<str.length;i++)
  {
      if(i%multipleOf===0)
      {
        if(casetype===1)
            str[i] = str[i].toLowerCase();
        else if(casetype===2)
            str[i] = str[i].toUpperCase();
      }
  }
  
  console.log(str.join(""));
});

/*
Sample Input :
ProFiLe
1
2

Sample Output :
Profile
*/
