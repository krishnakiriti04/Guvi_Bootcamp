Communication Error:

1. Invalid URL/Post Data:
	- long string concatenation
	- Dont forget to use encodeURIComponent()
	- ensure parameters are named correctly

2. Server response status
	- 200 is not only the valid status that may be returned(beware of 304)
	- Other status means we didnt get data
	- eg: if(xhr.status >= 200 && xhr.status < 300)||(xhr.status ==304){/*handle response*/} else{/*handle error*/}

3. No network connection
	- Firefox fails silently throws an error if you try to access any response property(status,statusText,responseText)
	- eg: No network connection
	if(xhr.readyState ==4)
	{
		try{
		if(xhr.status >= 200 && xhr.status < 300)||(xhr.status ==304)
			{/*handle response*/} 
		else
			{/*handle error*/}
		}
		catch(ex)
		{
			//handle error
		}
	}

4. Server response content
	 - A status of 200/304 is not enough
	 - Server error often return HTML
	 - if possible, set status to 500

5. Throw your own erros:
	- throw new error ("Invalid arg");
	- Erros should be thrown in low-level parts of application
		eg: Utilities, core libraries
	- Use try-catch blocks in higher level parts
		eg: Application specific, client-side business-logic

6. Distinguish between fata and non-fata errors
 	- Non-Fatal Errors:
 		- wont interfere with users main tasks
 		- affects only a portion of page( can be easily ignored/disables)
 		- Recovery is possible
 		- No need to warn the user with error unless it is absolutely necessary
 	- Fatal Errors	
 		- Application cannot contnue
 		- interfere with users ability to be productive
 		- other error will occur if the application continues
 		- inform the user immediately
 		- reload
 		-
7. Users experience comes first
	- watchout for loops

8. Debug mode
	- Assign a variable that is globally available
	- try-catch should re-throw the error
	- window.onerror shoudl return false
	- allow the browser to handle the error



//--------solution for Fix the error slide----------------

- uncaught-typeerror-cannot-read-property-value-of-undefined/null : Make sure the variable is defined and doesnt return null
- Type Error undefined in not an object (occurs in safari) : Occurs when property or method is accessed which is not defined. make sure to define it.
- Type Error undefined in not an object (occurs in safari) : Occurs when property or method is accessed which contains null value. make sure to update it.
- (unknown) script error : TyThis happens when your JS code is hosted on a different domain. To fix, set Access-Control-Allow-Origin: * on the JS file, and crossorigin="anonymous" on the <script> tag.
- (IE error) The "object doesn't support this property or method" error occurs when you try to use a method or property that the specified object does not support.
- Uncaught TypeError: undefined is not a function: Occurs when attempting to call a value like a function, where the value is not a function. 
	eg: var foo = undefined; foo(); and  var x = document.getElementByID('foo'); //foo is undefined
- Uncaught RangeError: Maximum Call Stack in JavaScript: 
	1. Non terminating recursive calls 
		- var b = new Array(-1); //throws range error
		- document.writeln(num.toFixed(25));
		- document.writeln(num.toPrecision(25));
	2. outofrange 
		- var num = 1; num.toPrecision(500); //throws max call stack error
- Cannot read property 'length' of undefined:"error indicates that the code expects to have an object with a length property, but that object was not present." 
- Uncaught TypeError: Cannot set property : When you try to access an undefined variable it always returns undefined and we cannot get or set any property of undefined.
	eg: var array; array[0] = 10; console.log(array); //throws error 
- ReferenceError: event is not defined : This error is thrown when you try to access a variable that is undefined or is outside the current scope. You can test it very easily in Chrome browser.
 	eg: function f(){var foo;} console.log(foo); //throws event is not defined error as it is out of scope 
 	If you’re getting this error when using the event handling system, make sure you use the event object passed in as a parameter. 


 	//task for call back
 	/*Write a function which takes 2 params 
	Operation
	Function array 
	 Based on the params do the operation*/

	 
