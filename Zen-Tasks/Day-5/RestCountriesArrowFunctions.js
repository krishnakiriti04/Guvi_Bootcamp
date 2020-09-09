//Rest countries:
    var XMLHttpRequest = require("xhr2");

    var request = new XMLHttpRequest();

    var url = "https://restcountries.eu/rest/v2/all"
    request.open("GET",url,true)
    request.send()
    var data;


	request.onload= function(){
		if(request.status == 200 && request.readyState ==4){
			data = JSON.parse(this.response);
			//console.log(data);
			GetAsianCountries(data);
			populationLessthan(data);				
			bumpthepopulation(data);
			Touppercase(data);
			Namecapital(data);
			TotalPopulation(data);
			Asiancountriespop(data);
		}
		else
		{
			console.log("Status is : "+request.status);
		}
	}

	
//Get the countries in asia - filter
	function GetAsianCountries(details){
		
		var asiancountries =  details.filter((val)=>val["region"]==="Asia")

		console.log(asiancountries.map((val)=>val["name"]))
	}

//Get the countries with population less than 2L - fliter
	function populationLessthan(details){

		var poplessthan2countries = details.filter((val)=>val.population <= 200000)

		console.log(poplessthan2countries.map((val)=>{
			var str = val["name"]+" : "+val["population"];
			return str;
		}))
	}

//Bumpup the current population  of all the counteirs by 1L - Map 

	function bumpthepopulation(details){

		var pop = details.map((val)=>{
			val["population"]+=100000;
			return val;
		});
		console.log(pop.map((val)=>{
			var str = val["name"]+" : "+val["population"];
			return str;
		}))

	}
//convert all the names in capital - map
	function Touppercase(details){

		var names = details.map((val)=>val.name.toUpperCase())

		console.log(names.map((val)=>val))

	}
//print follwoig details  name , capital , flag  - foreach,filter
	function Namecapital(details){
		//var namecap  = details.forEach((val)=>{console.log(val.name+" => "+val.capital)})
	}
//Print the total population of the countries  - reduce
	function TotalPopulation(details){
		var totpop = details.reduce((acc,cur)=>{
			acc = acc + parseInt(cur.population);
			return acc;
		},0)
		console.log(totpop); 		//7374137231
	}
//Print the total population of the countries in asia - filter & reduce
	function Asiancountriespop(details){

		var asianpop = details.filter((val)=>val.region==="Asia")
								.reduce((acc,curr)=>{
									acc = acc + parseInt(curr.population);
									return acc;},0)

		console.log(asianpop); 			//4391254784

	}