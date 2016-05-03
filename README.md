#Weather app using canvas

###We will fetch the current temperature from openweathermap.org and create a circle that corresponds to the current temperature via arc length and color.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/weatherapp)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/weatherapp/master/img/screen_shot.png)


##Code Examples

### Draws the temperature guage using canvas
```
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
```