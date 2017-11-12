var list=document.getElementById("list");
list.addEventListener("click", function(e){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < e.target.children.length; j++) {
			e.target.children[j].classList.toggle("invisible");
			e.target.children[j].classList.toggle("visible");
		}		
		
	}		
	
})















