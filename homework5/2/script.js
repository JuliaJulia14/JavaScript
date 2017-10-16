setInterval(function(){
var d = new Date();
var hoursToTomorrow =23-d.getHours();
var minutesToTomorrow= 59- d.getMinutes();
var secondsToTomorrow =59- d.getSeconds();
if (hoursToTomorrow < 10) hoursToTomorrow = "0" + hoursToTomorrow;
if (minutesToTomorrow < 10) minutesToTomorrow = "0" + minutesToTomorrow;
if (secondsToTomorrow < 10) secondsToTomorrow = "0" + secondsToTomorrow;
document.getElementById('clock').innerHTML = hoursToTomorrow + ":" + minutesToTomorrow + ":" + secondsToTomorrow;
setTimeout(function(){
		document.getElementById('clock').innerHTML = hoursToTomorrow + " " + minutesToTomorrow + " " + secondsToTomorrow;
		},700)
},1000);


