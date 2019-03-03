
var jsonData;

document.getElementById("cityBtn").addEventListener("click", function(){
	var x = document.getElementById("city").value;
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=3f303374e26f676219d103a2c45de60b&units=imperial";
	var url2 = "http://api.openweathermap.org/data/2.5/forecast?q="+x+"&cnt=7&APPID=3f303374e26f676219d103a2c45de60b&units=imperial";
	$.getJSON(url, function(data) {
				jsonData = data;
				$('.city').text(jsonData.name);
				console.log(jsonData);
				
				document.getElementById("location").innerHTML=jsonData.name;
				document.getElementById("temp").innerHTML=jsonData.main.temp;
				var iconurl = "http://openweathermap.org/img/w/" + jsonData.weather[0].icon + ".png";
				console.log(jsonData.weather[0].icon);
				$('#icon').attr('src', iconurl);
				document.getElementById("maxt").innerHTML=jsonData.main.temp_max;
				document.getElementById("mint").innerHTML=jsonData.main.temp_min;
			});
	$.getJSON(url2, function(data) {
				jsonData = data;
				$('.city').text(jsonData.name);
				console.log(jsonData);
				for(var i=1;i<=6;i++){
					console.log("iteration "+i);
					var hour = jsonData.list[i].dt_txt.split(" ");
					document.getElementById("hr"+i).innerHTML=hour[1];
					document.getElementById("high"+i).innerHTML=jsonData.list[i].main.temp_max;
					document.getElementById("low"+i).innerHTML=jsonData.list[i].main.temp_min;
				}
				
			});
		
})



