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
  var len = parseInt(userInput[0]);
  var arr = userInput[1].split(" ").map(Number);
  const res = arr
        .filter(value=>{
              var count=0;
              for(var i=0;i<len;i++)
              {
                  if(arr[i]===value)
                    count++;
              }
              return count===2;
          });
        
  console.log(res.filter((val,ind)=>res.indexOf(val)===ind).join(" "));

  //end-here
});

/*
Sample Input :
5
13 12 13 12 13

Sample Output :
12
*/


