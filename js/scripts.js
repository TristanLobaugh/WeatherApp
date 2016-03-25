$(document).ready(function(){

	var apikey = "a9c0b1417dab7222d4a9114df6a6e81f";
	var weatherURL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + apikey + "&q=Atlanta&units=imperial";
	var currPercent = 0;
	var shadeColor;


	$.getJSON(weatherURL, function(weatherData){
		console.log(weatherData);
		//we want temp
		var currTemp = weatherData.main.temp;
		iconHTML = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png">';
		$("#icons").html(iconHTML);
		$("#weather-description").html(weatherData.weather[0].description);


		var canvas = $("#current-temp");
		var context  = canvas[0].getContext("2d");

		//Set up our circle and styling
		//Set up out color on temp(cold= blue, hot = red)

		//Set up animate function
		//update appropraite variables
		function animate(current){
			context.fillStyle = "#ccc";
			context.beginPath();
			context.arc(155, 75, 65, 0, 2 * Math.PI);
			context.closePath();
			context.fill();

			context.lineWidth = 10;
			context.strokeStyle = "#ff0000"; //shadeColor
			context.beginPath();
			context.arc(155, 75, 70, 1.5 * Math.PI, (1.5 * Math.PI) + (2 * Math.PI * current));
			context.stroke();

			context.font = "48px Myriad Pro";
			context.fillStyle = "#0000ff";
			context.textBaseLine = "top";
			context.fillText(currTemp, 105, (15)*6)
			currPercent++;
			if(currPercent < currTemp){
				requestAnimationFrame(function(){
					animate(currPercent/100);
				});
			}
		}
		animate();
	});	
});














