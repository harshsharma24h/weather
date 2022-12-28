const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59b35622d8mshb67ad93c651d392p14c3f0jsn87bbc0757bcd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let clock = () => {
	let date = new Date();
	let hrs = date.getHours();
// let mins = date.getMinutes();
	// let secs = date.getSeconds();
	let time = `${hrs}`
	// log the time in console
	setTimeout(clock, 1000);
	

	
	if(time >= 6 && time <= 18){
		document.getElementById('image').src = 'giphy (2).gif';
	}else{
	document.getElementById('image').src = 'moon1.gif';
		// document.getElementById('color').style.backgroundColor='black';
		
	}





	console.log(time)
  }
  // call the clock function
clock();
















const getWeather=(city)=>{
// toUpperCase(city)
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		// feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		// min_temp.innerHTML = response.min_temp
		// max_temp.innerHTML = response.max_temp
		// wind_speed.innerHTML = response.wind_speed
		// wind_degrees.innerHTML = response.wind_degrees
		// sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("bhopal")