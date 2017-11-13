var div=document.getElementById("main")
var settings={
	"#home":{path:"1.html",
			 handler:function(){
			 	var btn=document.getElementById("11")
			 	btn.onclick=function(){

			 	}
			 }},
	"#about_us":{path:"2.html",
			  	 handler:function(){
			 		setInterval(function(){
					var d = new Date();
					var hoursToTomorrow =24-d.getHours();
					var minutesToTomorrow= 59- d.getMinutes();
					var secondsToTomorrow =59- d.getSeconds();
					if (hoursToTomorrow < 10) hoursToTomorrow = "0" + hoursToTomorrow;
					if (minutesToTomorrow < 10) minutesToTomorrow = "0" + minutesToTomorrow;
					if (secondsToTomorrow < 10) secondsToTomorrow = "0" + secondsToTomorrow;
					document.getElementById('clock').innerHTML = hoursToTomorrow + ":" + minutesToTomorrow + ":" + secondsToTomorrow;
				},1000);
			 		
			 }},
	"#services":{path:"3.html",
			 	 handler:function(){
			 		alert("Здравствуйте")
			 }},
	"#news":{path:"4.html",
			 handler:function(){
			 	
			 }},
	"#contacts":{path:"5.html",
			 handler:function(){
			 	
			 }}
}

var change=function(){
	var path=settings[location.hash].path;
	var xhr=new XMLHttpRequest;
	xhr.open("GET",path,true)
	xhr.onload=function(){
		div.innerHTML=this.responseText;
		settings[location.hash].handler();
	}
	xhr.send(null);
}

window.onhashchange=function(){
	change();
}
if (location.hash in settings) {
	change();
}
