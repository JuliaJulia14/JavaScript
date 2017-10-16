var tags = 0;
var comments = 0;
var text = 0;

var count = function(element){
	switch(element.nodeType){
		case 1: tags++; 
			break;
		case 3: text++; 
			break;
		case 8: comments++; 
			break;
	
	}
	if(element.hasChildNodes()){
		for (var i = 0; i < element.childNodes.length; i++) {
			count(element.childNodes[i]);
		}
	}
}
count(document);
document.write("Количество тегов: " + tags+"<br\/>");
document.write("Количество комментариев: " + comments+"<br\/>");
document.write("Количество текстовых узлов: " + text);