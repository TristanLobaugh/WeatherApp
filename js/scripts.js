$(document).ready(function(){

	var apikey = "a9c0b1417dab7222d4a9114df6a6e81f";
	var city = "Atlanta"
	var weatherURL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + apikey + "&q=" + city + "&units=imperial";
	var shadeColor;

	getWeather();

	$("#submit-button").click(function(){
		city = $("#city-selector").val();
		weatherURL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + apikey + "&q=" + city + "&units=imperial";
		getWeather();
	});

	function getWeather(){
		$.getJSON(weatherURL, function(weatherData){
			var currPercent = 0;
			var currTemp = weatherData.main.temp;
			if(currTemp < 32){
				shadeColor = '#D4F0FF';
			}else if((currTemp >= 32) && (currTemp < 59)){
				shadeColor = "#129793";
			}else if((currTemp >= 59) && (currTemp < 75)){
				shadeColor = "#7cfc00";
			}else if((currTemp >= 75) && (currTemp < 90)){
				shadeColor = "#FF6600";
			}else{
				shadeColor = '#E3170D';
			}

			iconHTML = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png">';
			$("#icons").html(iconHTML);
			$("#weather-description").html(weatherData.weather[0].description);
			$("#city").html(city);

			var canvas = $("#current-temp");
			var context  = canvas[0].getContext("2d");
			animate();
			//Set up our circle and styling
			//Set up out color on temp(cold= blue, hot = red)

			//Set up animate function
			//update appropraite variables
			function animate(current){
				context.clearRect(0,0, 300, 300);
				context.fillStyle = "#ccc";
				context.beginPath();
				context.arc(155, 75, 65, 0, 2 * Math.PI);
				context.closePath();
				context.fill();

				context.lineWidth = 10;
				context.strokeStyle = shadeColor; //shadeColor
				context.beginPath();
				context.arc(155, 75, 70, 1.5 * Math.PI, (1.5 * Math.PI) + (2 * Math.PI * current));
				context.stroke();

				context.font = "48px Myriad Pro";
				context.fillStyle = "#000000";
				context.textBaseLine = "top";
				context.fillText(currTemp, 105, (15)*6)
				currPercent++;
				if(currPercent < currTemp){
					requestAnimationFrame(function(){
						animate(currPercent/100);
					});
				}
			}
		});
	}
});














