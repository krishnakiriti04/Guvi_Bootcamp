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
    var num = userInput[0];
    if(Math.round(num)%2===0)
        console.log("Even");
    else
        console.log("Odd");
});






