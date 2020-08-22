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
  var str = userInput[0];
  var newstr = "";
  
  for(let i=str.length-1;i>=0;i--)
  {
      newstr += str[i];
  }
  
// var res = str.split("").reverse().join(""); //using inbuilt functions
  
  (str ===newstr)?console.log('yes'):console.log('no');
});

/*
Sample Testcase :
INPUT
lappal

OUTPUT
yes
*/
