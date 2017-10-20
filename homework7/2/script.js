var input=document.getElementById("asd");
input.addEventListener("keypress",function(e){
	if ((e.charCode==46)||((e.charCode>=48)&(e.charCode<=57))||((e.charCode>=64)&(e.charCode<=90))||((e.charCode>=97)&(e.charCode<=122))){}
	else{
		e.preventDefault();
		alert("Введите символы, которые могут содержаться в E-mail: большие и маленькие буквы английского алфавита .  @");
	}
})