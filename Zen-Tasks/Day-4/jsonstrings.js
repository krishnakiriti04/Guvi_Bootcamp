//---------problem-0------------------

//----------part-a-----------
/*
var cat = {
 "name": 'Fluffy',
 "activities": ['play', 'eat cat food'],
 "catFriends": [
	 {
		 "name": 'bar',
		 "activities": ['be grumpy', 'eat bread omblet'],
		 "weight": 8,
		 "furcolor": 'white'
	 }, 
	 {
		 "name": 'foo',
		 "activities": ['sleep', 'pre-sleep naps'],
		 "weight": 3
	 }]
}

//Add height and weight to Fluffy
	cat.height = 1.73;
	cat.weight = 7;

//Fluffy name is spelled wrongly. Update it to Fluffyy
	cat.name = "Fluffyy"

//List all the activities of Fluffyy’s catFriends.
	var str = [];
	for(let i=0;i<cat.catFriends.length;i++)
	{
		str.push(cat.catFriends[i].activities);
	}
	console.log(str.join(","))

//Print the catFriends names.
	var name = [];
	for(let i=0;i<cat.catFriends.length;i++)
	{
		name.push(cat.catFriends[i].name);
	}
	console.log(name.join(","))

//Print the total weight of catFriends
	var totweight = 0;
	for(let i=0;i<cat.catFriends.length;i++)
	{
		totweight += cat.catFriends[i].weight;
	}
	console.log(totweight)	

//Print the total activities of all cats (op:6)
	var act = []
	act.push(cat.activities);
	for(let i=0;i<cat.catFriends.length;i++)
	{
		act.push(cat.catFriends[i].activities);
	}
	console.log(act.join(","));

//Add 2 more activities to bar & foo cats
	cat.catFriends[0].activities[2] = 'play with wool'
	cat.catFriends[0].activities[3] = 'chase the mice'
	cat.catFriends[1].activities[2] = 'play with other cats'
	cat.catFriends[1].activities[3] = 'catch fish in the tank'

//Update the fur color of bar
	cat.catFriends[1].furcolor = 'Brown';


console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities)
*/


//-------------part-b----------------
/*
var myCar = {
 "make": "Bugatti",
 "model": "Bugatti La Voiture Noire",
 "year": 2019,
 "accidents": [
 {
 "date": "3/15/2019",
 "damage_points": "5000",
 "atFaultForAccident": true
 },
 {
 "date": "7/4/2022",
 "damage_points": "2200",
 "atFaultForAccident": true
 },
 {
 "date": "6/22/2021",
 "damage_points": "7900",
 "atFaultForAccident": true
 }
 ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.
	for(let i=0;i<myCar.accidents.length;i++)
	{
		myCar.accidents[i].atFaultForAccident = false
	}

//2. Print the dates of my accidents
	for(let i=0;i<myCar.accidents.length;i++)
	{
		console.log(myCar.accidents[i].date)
	}	

console.log(myCar)
*/




//---------problem-1------------------

var object = {"name": "RajiniKanth", "age": 33, "hasPets" : false};

function printAllValues(obj) {
 	// your code here
 	var arr = [];
 	for(var val in obj)
 	{
 		arr.push(obj[val]);
 	}
 	return arr;
}

//console.log(printAllValues(object));

//---------problem-2------------------

function printAllKeys(obj) {
 	// your code here
 	var arr = [];
 	for(var val in obj)
 	{
 		arr.push(val);
 	}
 	return arr;
}

//console.log(printAllKeys(object));

//---------problem-3------------------

var isroObject = {"name": "ISRO", "age": 35, "role": "Scientist"};

function convertListToObject(obj) {
 	// your code here
 	//return Object.entries(obj);
 	var arr = [];
 	for(let i in obj)
 	{
 		arr.push([i,obj[i]])
 	}
 	return arr
}

//console.log(convertListToObject(isroObject));

//---------problem-4------------------
var array = ["GUVI", "I", "am", "Geek"];

function transformFirstAndLast(arr) {
 var newObject={};
 newObject[arr[0]]=arr[arr.length-1];
 return newObject;
}

//console.log(transformFirstAndLast(array));

//---------problem-5------------------
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(obj) {
 	// your code here
 	//return Object.fromEntries(obj)
 	var newObj = obj.reduce((p,c)=>{
 		p[c[0]] = c[1];
 		return p;
 	},{});

 	return newObj;
}

//console.log(fromListToObject(arr))


//---------problem-6------------------

var newArr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
 	var tranformEmployeeList = [];

 	for(let i=0;i<arr.length;i++)
 	{
 		tranformEmployeeList.push(Object.fromEntries(arr[i]))
 		/*tranformEmployeeList.push(()=>{
 			var obj = arr[i].reduce((acc,curr)=>{
 				acc[curr[0]] = curr[1];
 				return acc;
 			})
 			return obj;
 		})*/
 	}

 	return tranformEmployeeList;
}

//console.log(transformEmployeeData(newArr));


//---------problem-7------------------

var expected = {foo: 5, bar: 6};
var actual = {bar: 6, foo: 5}


function assertObjectsEqual(actual, expected,testName)
{
	(JSON.stringify(actual)===JSON.stringify(expected))?console.log("PASSED"):console.log("FAILED " +"["+ testName+"] Expected: "+expected+" but got: "+actual);
}

//assertObjectsEqual(actual,expected,"detects that two objects are equal");


//---------problem-8------------------

var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {

 for(let i=0;i<securityQuestions.length;i++)
 {
 	if(securityQuestions[i].question ===question)
 	{
 		return securityQuestions[i].expectedAnswer === answer;
 	}
 	else
 		return false;
 }
 
}

//Test case1:
var ques = "What was your first pet's name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
//console.log(status); // true
//Test case2:
var ques = "What was your first pet's name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
//console.log(status); // flase

//---------problem-9------------------

var students = [
 {name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56}];
function returnMinors(arr)
{
	var char = [];
	for(let i=0;i<students.length;i++)
	{
		if(students[i].age < 20)
		{
			char.push(students[i].name);
		}
	}
	return char;
}
//console.log(returnMinors(students));