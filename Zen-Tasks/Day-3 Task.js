//-----------task-1----------------
//RestCountriesAPI

//created a page using xmlhttp request for restcountriesapi
https://krishnakiriti04.github.io/Guvi-Tasks/RestCountriesAPI/

//link to html and js file of the page
https://github.com/krishnakiriti04/Guvi-Tasks/tree/master/RestCountriesAPI

//-----------task-2----------------
//dogApi

var request = new XMLHttpRequest()
var url = "https://dog.ceo/api/breeds/list/all";
request.open('GET',url,true)
request.send()

request.onload = function(){
	var data = JSON.parse(this.response);
	
	console.log(data.message);
	
}

//-----------task-3----------------
//WeatherAPI
//hosted the webpage in the github for weatherAPI (not working as content is loaded over https but not on http)

https://krishnakiriti04.github.io/Guvi-Tasks/WeatherAPI/

//link to html, js file of weather api project

https://github.com/krishnakiriti04/Guvi-Tasks/tree/master/WeatherAPI

//----------JS code----------
function search(){
var city = document.getElementById('city').value
var country = document.getElementById('country').value
var request = new XMLHttpRequest()
var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=a9cfdb29a716e26d71aebb273da499d6"
request.open('GET',url,true)
request.send()

request.onload = function(){
	var data = JSON.parse(this.response);
	var temp = (data["main"]["temp"]-273.15).toFixed(1
		);
	document.querySelector('#weather').innerHTML = data["name"]+","+data["sys"]["country"]+" Temperature "+temp+"&deg, wind "+data["wind"]["speed"] +" m/s, pressure " +data["main"]["pressure"]+" hpa";	
}
}


//-----------task-4----------------

//-----------js code---------------

var request = new XMLHttpRequest()
var url = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
request.open('GET',url,true)
request.send()

request.onload = function(){
	console.log(this.response.header);
	var data = JSON.parse(this.response);
	
	console.log(data);
	
}

//got CORS error, solved with the help of chrome extension.



