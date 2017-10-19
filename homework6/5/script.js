var Name=document.getElementById("name");
var Phone=document.getElementById("phone");
var E_Mail=document.getElementById("E-mail");
var Address=document.getElementById("address");
var Age=document.getElementById("age");
var button=document.getElementById("enter");
var r_name=/^[A-Za-zа-яА-я][A-Za-zа-яА-я\- ]{2,19}$/;
var r_phone=/[\+]?375[\- \(]?[25|29|33|44]{2}[\- \)]?[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{2}/
var r_mail=/[a-zA-z\_0-9\-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,10}/;
var r_adress=/^[a-zA-Z0-9\-]{0,50}\.+[a-zA-Z]{2,8}$/
function Valid_Phone(){
	if (r_phone.test(Phone.value)) {
		Phone.setAttribute("class", "true");
	} else {
		Phone.setAttribute("class", "false");
	}
}
function Valid_Name(){
	if (r_name.test(Name.value)) {
		Name.setAttribute("class", "true");
	} else {
		Name.setAttribute("class", "false");
	}

}
function Valid_Mail(){
	if (r_mail.test(E_Mail.value)) {
		E_Mail.setAttribute("class", "true");
	} else {
		E_Mail.setAttribute("class", "false");
	}

}

function Valid_Adress(){
	if (r_adress.test(Address.value)) {
		Address.setAttribute("class", "true");
	} else {
		Address.setAttribute("class", "false");
	}
}
function Valid_Age(){
	if (Age.value>=14&Age.value<=90){
		Age.setAttribute("class", "true");
	} else {
		Age.setAttribute("class", "false");
	}
}

function Valid(){
	if ((Age.value>=14&Age.value<=90)&(r_adress.test(Address.value))&(r_mail.test(E_Mail.value))&(r_name.test(Name.value))&(r_phone.test(Phone.value))){
		alert("Данные введены верно")
	}
	else{
		alert("Данные введены неверно")
	}
}

Name.addEventListener("input",Valid_Name);
Phone.addEventListener("input",Valid_Phone);
Address.addEventListener("input",Valid_Adress);
E_Mail.addEventListener("input",Valid_Mail);
Age.addEventListener("input",Valid_Age);
button.addEventListener("click",Valid)