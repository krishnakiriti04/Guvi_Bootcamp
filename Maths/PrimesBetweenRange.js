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
  var arr = userInput[0].split(" ").map(Number);
  var l = arr[0];
  var r = arr[1];
  var count = 0;
  for(var i=l;i<r+1;i++)
  {
      count = count + isprime(i);
  }
  console.log(count);
  //end-here
});

function isprime(n)
{
    var factors = 0;
    for(var i=1;i<=n;i++)
    {
        if(n%i===0)
            factors += 1;
    }
    return (factors===2)?1:0;
}



/*
INPUT
2 5
OUTPUT
3
*/
