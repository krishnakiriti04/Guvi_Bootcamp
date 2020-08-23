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
  var n = userInput[0].split(" ").map(Number);
  //console.log(gcd(25,50));
  (gcd(n[0],n[1])===1)?console.log(1):console.log(0);

});


function gcd(a,b)
{
    if(a===0||b===0)
        return 0;
    
    if(a===b)
        return a;
        
    if(a>b)
        return gcd(a-b,b);
        
    return gcd(a,b-a);    
}

/*
Sample Input :
3 5

Sample Output :
1
*/
