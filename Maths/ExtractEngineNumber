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
  var arr = userInput[0].split("-");
  var num = "";
  for(var i=0;i<arr.length;i++)
  {
      num = num + arr[i].replace(/\D/g,"");
  }
  var res = sum(parseInt(num));
  console.log(res);

  //end-here
});

function sum(data)
{
    var total = 0;
    while(data>0)
    {
        total += (data%10);
        data = parseInt(data/10);
    }
    return total;
}

/*
Input Description:
You are given a string ’s’

Output Description:
Print the engine number

Sample Input :
HR05-AA-2669

Sample Output :
28 //sum of 052669
*/



