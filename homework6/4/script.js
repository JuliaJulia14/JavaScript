var display=document.getElementById("display");
var Add_To_Memory=document.getElementById("M+");
var Show_On_Screen=document.getElementById("MR");
var Remove_From_Memory=document.getElementById("MC");
var zero=document.getElementById("0");
var one=document.getElementById("1");
var two=document.getElementById("2");
var three=document.getElementById("3");
var four=document.getElementById("4");
var five=document.getElementById("5");
var six=document.getElementById("6");
var seven=document.getElementById("7");
var eight=document.getElementById("8");
var nine=document.getElementById("9");
var remove=document.getElementById("C");
var addition=document.getElementById("addition");
var subtraction=document.getElementById("subtraction");
var multiplication=document.getElementById("multiplication");
var division=document.getElementById("division");
var equally=document.getElementById("equally");
var memory=NaN;

function func(){
	display.value+=this.value;
}

function equal(){
	display.value=eval(calculator.display.value)
}

function rem(){
	display.value="";
}

function add_to_memory(){
	memory=display.value;
	display.value="";
}

function show_on_screen(){
	if (!(isNaN(memory))) {
		display.value+=memory;
	}
}

function remove_from_memory(){
	memory=NaN;
}

zero.addEventListener("click", func);
one.addEventListener("click", func);
two.addEventListener("click", func);
three.addEventListener("click", func);
four.addEventListener("click", func);
five.addEventListener("click", func);
six.addEventListener("click", func);
seven.addEventListener("click", func);
eight.addEventListener("click", func);
nine.addEventListener("click", func);
division.addEventListener("click", func);
addition.addEventListener("click", func);
subtraction.addEventListener("click", func);
multiplication.addEventListener("click", func);
equally.addEventListener("click", equal);
remove.addEventListener("click", rem);
Add_To_Memory.addEventListener("click",add_to_memory);
Show_On_Screen.addEventListener("click",show_on_screen);
Remove_From_Memory.addEventListener("click",remove_from_memory);


