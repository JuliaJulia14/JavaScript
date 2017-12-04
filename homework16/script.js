var div0=document.getElementById("audio");
var div1=document.getElementById("q")
var div2=document.getElementById("w")
var play=document.getElementById("e");
var stop=document.getElementById("r");
var range=document.getElementById("t")
var slow=document.getElementById("y");
var fast=document.getElementById("u");
var repeat=document.getElementById("i");
var list=document.getElementById("o");
var img=document.getElementById("p");
var time=document.getElementById("time");
var nextaudio;
var currentaudio;
var min;
var sec;
var mind;
var secd;
var c=0;
var k=0;
var xhr = new XMLHttpRequest();
xhr.open("GET", "playlist.json", true);


xhr.onload = function() {
	var music = JSON.parse(this.responseText);
	
	for(var i=0; i<music.length; i++){
		var li = document.createElement("li");
		list.appendChild(li);
		li.innerHTML = "<audio src=" + music[i].file +" id='"+i+"'></audio><input type='image' class='play' src='play.jpg' i><span>" + music[i].name + "</span>";
	}
    
	var audio=document.getElementById("0");

	for (var i = 0; i < music.length; i++) {
		(function(k){
			 var btn=document.getElementsByClassName("play")[i];
			 btn.addEventListener("click",function(e){
			 	for (var i = 0; i < music.length; i++) {
			 			audio.pause();
			 	}
			 	audio=document.getElementsByTagName("audio")[k];
			 	play.src="play.jpg"; 	
			
			 	audio.play();
			 	currentaudio=audio;
			 	
			 	if(audio.getAttribute("id")==music.length-1) {
			 		nextaudio=document.getElementById("0");
			 	}
			 	else{
			 		nextaudio=document.getElementsByTagName("audio")[k+1];
			 	}

				img.setAttribute("src",music[k].album);
			 	c=1;
			 })
			 
		})(i)
	}





	play.addEventListener("click",function(){
		if(c%2==0){
			play.src="play.jpg"
			audio.play();
			if (c==0) {
				img.setAttribute("src",music[0].album);
			}
			c++
		}
		else{
			play.src="pause.jpg";
			audio.pause();
			c++
		}

	})

	stop.addEventListener("click",function(){
		audio.pause();
		audio.currentTime=0.0;
		c=0;
	})

	slow.addEventListener("click", function(){
		audio.playbackRate*=0.8;
	})

	fast.addEventListener("click", function(){
		audio.playbackRate*=1.25;
	})

	repeat.addEventListener("click",function(){
		if(k%2==0){
			audio.loop=true;
			repeat.style.border="1px solid #C3B091";
			k++;
		}
		else{
			audio.loop=false;
			repeat.style.border="none";
			k++;
		}
	})

	range.addEventListener("input", function(){
		audio.volume=range.value;
	});

	audio.addEventListener("loadedmetadata",function(){
		setInterval(function(){
			var a;
			a=(audio.currentTime*400)/audio.duration;
			div2.style.width=a+"px";
			if (audio.currentTime==audio.duration){
				div2.style.width=0+"px";
				audio=document.getElementsByTagName("audio")[nextaudio.getAttribute("id")]
				img.setAttribute("src",music[nextaudio.getAttribute("id")].album);
				audio.play();
				currentaudio=nextaudio;
				if(audio.getAttribute("id")==music.length-1) {
			 		nextaudio=document.getElementById("0");
			 	}
			 	else{
			 		var n=Number(nextaudio.getAttribute("id"))+1;
			 		nextaudio=document.getElementsByTagName("audio")[n];
			 	}
			 

			}
		},100)
	})

	div1.addEventListener("click", function(e){
		audio.currentTime = Number(audio.duration)*e.offsetX/Number(div1.getBoundingClientRect().width);
	})

	setInterval(function() {
		min = Math.floor(audio.currentTime / 60);
		sec = Math.floor(audio.currentTime % 60);
		mind= Math.floor(audio.duration / 60);
		secd= Math.floor(audio.duration % 60);
		if (sec > 59) sec = 0;
		if (sec < 10) sec = "0" + sec;	
		if (secd > 59) sec = 0;
		if (secd < 10) secd = "0" + secd;	
		if (mind < 10) mind = "0" + mind;
		time.innerHTML = "0" + min + ":" + sec + "/"+mind+":"+secd+"<br>"+music[audio.getAttribute("id")].name;
		}, 100);

}
xhr.send(null);

