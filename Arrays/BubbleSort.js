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
  console.log(sort(arr,len)[0]);
});


function sort(arr,n)
{
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n-i;j++)          //after every iteration the consecutive largest number will be at the end of the array so we use "n-i", its okay even if we use "n"
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        
    }   
        return arr;
}


/*
Sample Input :
5
3 4 9 1 6

Sample Output :
1
*/
