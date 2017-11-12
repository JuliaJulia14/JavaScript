var menu=[
	{
		title:"Первый пункт меню",
		action:function(){
			alert("Вы выбрали первый пункт меню")
		}
	},	
	{
		title:"Второй пункт меню",
		action:function(){
			alert("Вы выбрали второй пункт меню")
		}
	},	
	{
		title:"Третий пункт меню",
		action:function(){
			alert("Вы выбрали третий пункт меню")
		}
	},	
	{
		title:"Четвертый пункт меню",
		action:function(){
			alert("Вы выбрали четвертый пункт меню")
		}
	}												
];

var div=document.getElementById("wrapper");
var ul=document.getElementById("Menu");

for (var i = 0; i < menu.length; i++) {
	var li=document.createElement("ul");
	li.innerHTML=menu[i].title;
	ul.appendChild(li);
}

div.addEventListener('click', function(){
	div.style.display = "none";
})

ul.addEventListener('click', function(e){
	e.stopPropagation(); 	
})

document.addEventListener("contextmenu",function(e){
	e.preventDefault();
	if (window.innerHeight-e.clientY<div.clientHeight) {
		div.style.top=10+e.clientY-div.clientHeight+"px";
	}
	else{
		div.style.top=e.clientY+"px";
	}
	if (window.innerWidth-e.clientX<div.clientWidth) {
		div.style.left=e.clientX-div.clientWidth+"px";
	}
	else{
		div.style.left=e.clientX+10+"px";
	}
	
	div.style.display="block"
})

document.addEventListener("click", function(e) {
	div.style.display="none"
});

for(var i = 0; i < menu.length; i++){
	ul.children[i].addEventListener('click', function(e){
		div.style.display="none";
		var text = this.outerText;
		menu.forEach(function(el){
			if(el.title == text){
				el.action();
			}
		});

	});
}






















