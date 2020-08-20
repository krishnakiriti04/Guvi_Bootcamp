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
  
  var str = userInput[0];//.split("");
 
 balancecheck(str)?console.log(1):console.log(0);
});


function balancecheck(str)
{
 var stack = [];
 var map = {
     '{' : '}',
     '[' : ']',
     '(' : ')'
 }
 
  for(var i=0;i<str.length;i++)
  {
    if(str[i]==='{'||str[i]==='['||str[i]==='(')
        stack.push(str[i]);
    else
    {
        let last = stack.pop();
        
        if(str[i]!==map[last])
            return false;
    }
        
  }
  if(stack.length!==0)
    return false;

return true;
}


/*
Sample Input :
{({})}

Sample Output :
1
*/
