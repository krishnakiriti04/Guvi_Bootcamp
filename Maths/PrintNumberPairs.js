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
  var n = parseInt(userInput[0]);
  var count=0;
  for(let i=1;i<n;i++)
  {
      for(let j=1;j<n;j++)
      {
          if(i+j===n)
            count = count + 1;
      }
  }
  
  console.log(count);
});

/*
Output Description:
Print the number of pairs satisfying above condition

Sample Input :
5

Sample Output :
4
*/
