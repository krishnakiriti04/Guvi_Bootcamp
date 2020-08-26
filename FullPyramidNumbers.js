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
    var arr;
   //var spaces = "";
    for(let i=1;i<=5;i++)
    {
         arr = [];
        for(let k=5;k>=i+1;k--)
        {
            arr.push(" "); 
        }
        for(let j=1;j<=i;j++)
        {
            arr.push(j);
            arr.push(" ");
            arr.push(" ");
        }
        console.log(arr.join(""));
    }
  for(let i=5;i>=1;i--)
    {
        arr = [];
        for(let k=5;k>=i;k--)
        {
            arr.push(" ");
        }
        for(let j=1;j<=i-1;j++)
        {
            arr.push(j);
            arr.push(" ");
            arr.push(" ");
        }
        console.log(arr.join(""));
    }
  
  
  
// console.log(this);
});
