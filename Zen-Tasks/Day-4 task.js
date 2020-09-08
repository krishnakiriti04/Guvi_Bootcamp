/*
----------------Difference between window screen and document in JavaScript-------------
Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
*/


//--------------Added error handling to all xmlhttprequest api pages----------------
https://krishnakiriti04.github.io/Guvi-Tasks/DomainAPI
https://krishnakiriti04.github.io/Guvi-Tasks/WeatherAPI/  //Entire functionality is now working
https://krishnakiriti04.github.io/Guvi-Tasks/RestCountriesAPI
https://github.com/krishnakiriti04/Guvi-Tasks/blob/master/DogAPI/api.js


//--------------------------task for callback------------------------------
function serve(op,funcarr){
	 	return funcarr[op];
}


function add(num1,num2)
{
	return num1+num2;
}

function sub(num1,num2)
{
	return num1-num2;
}

function mul(num1,num2)
{
	return num1*num2;
}

function div(num1,num2)
{
	return num1/num2;
}

var arr = [add,sub,mul,div];

var func = serve(2,arr);			// 0:add, 1:sub,2:mul,3:div

console.log(func(10,60))			//output 600


//----------------------- fix for common errors & ppt writeup----------------
//link to that file

https://github.com/krishnakiriti04/Guvi_Bootcamp/blob/master/Zen-Tasks/Day-4/errors.js



//-----------------------JSONStrings problems------------------------------
//link to js file

https://github.com/krishnakiriti04/Guvi_Bootcamp/blob/master/Zen-Tasks/Day-4/jsonstrings.js



//----------------------Functions basics---------------------------------------
//link to js file

https://github.com/krishnakiriti04/Guvi_Bootcamp/blob/master/Zen-Tasks/Day-4/basicfunctions.js



//----------------------Mandatory tasks with IIFE and anonymous functions---------
//link to js file

https://github.com/krishnakiriti04/Guvi_Bootcamp/blob/master/Zen-Tasks/Day-4/functions.js
