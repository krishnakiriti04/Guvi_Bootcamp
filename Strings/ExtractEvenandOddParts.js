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
  var even = '';
  var odd = '';
  for(let i=0;i<str.length;i++)
  {
      if(i%2===0)
        even = even + str[i];
      else
        odd = odd + str[i];
  }
  
  console.log(even+" ".concat(odd));
  
});

/*
Sample Testcase :
INPUT
XCODE

OUTPUT
XOE CD
*/
