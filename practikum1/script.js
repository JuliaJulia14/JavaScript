var flowers=[
{name:"Тюльпаны", price:2.8},
{name:"Хризантема кустовая", price:3.7},
{name:"Хризантема баккарди", price:4.0},
{name:"Ирис", price:2.5},
{name:"Гиацинт", price:4.1},
{name:"Гвоздика", price:1.5},
{name:"Гербера", price:3.6},
{name:"Сирень", price:7.5},
{name:"Гортензия", price:10.0},
{name:"Лилия", price:12.0},
]

//var s=document.getElementById('flow');
var fl=document.getElementsByName("radio0");
var price_flow=0;
var sp=document.getElementById('asd');
var n=document.getElementById('numb');
var summa=document.getElementById('Summa');
var packaging=document.getElementsByName("radio1");
var price_packaging=0;
var delivery=document.getElementById("qqqqq");
var price_delivery=0;
var discount=document.getElementsByName("radio2");
var im=document.getElementsByTagName("img")

for (var i = 0; i < fl.length; i++) {
	fl[i].value=flowers[i].price;
}

//for (var i = 0; i < flowers.length; i++) {
	//var option = new Option(flowers[i].name, flowers[i].price);
    //s.appendChild(option);
//}

n.addEventListener("keypress",function(e){
	if (((e.charCode>=48)&(e.charCode<=57))){}
	else{
		e.preventDefault();
		alert("Можно вводить только цифры");
	}
})


//s.addEventListener("change",function(){
	//summa.value=Math.round((n.value*price_flow+price_packaging+price_delivery)*100)/100;
//});
function result(){
	if (discount[1].checked) {
		summa.value=Math.round(((n.value*price_flow+price_packaging+price_delivery)*0.95)*100)/100;
	} 
	else {
		if (discount[2].checked) {
			summa.value=Math.round(((n.value*price_flow+price_packaging+price_delivery)*0.9)*100)/100;
		} 
		else {
			summa.value=Math.round((n.value*price_flow+price_packaging+price_delivery)*100)/100;}
		}
}

n.addEventListener("input",result);

packaging[0].addEventListener("change",function(){
		price_packaging=Number(packaging[0].value);
		result();
})
packaging[1].addEventListener("change",function(){
		price_packaging=Number(packaging[1].value);
		result();
})
packaging[2].addEventListener("change",function(){
		price_packaging=Number(packaging[2].value);
		result();
})

delivery.addEventListener("change",function(){
		price_delivery=Number(delivery.value);
		result();
})

discount[0].addEventListener("change",function(){
		summa.value=Math.round((n.value*price_flow+price_packaging+price_delivery)*100)/100;
})
discount[1].addEventListener("change",function(){
		summa.value=Math.round(((n.value*price_flow+price_packaging+price_delivery)*0.95)*100)/100;
})
discount[2].addEventListener("change",function(){
		summa.value=Math.round(((n.value*price_flow+price_packaging+price_delivery)*0.9)*100)/100;
})

sp.addEventListener("change",function(e){
	price_flow=e.target.value;
	result();
	for (var i = 0; i < flowers.length; i++) {
		im[i].classList.remove("true");
	}	
	e.target.nextSibling.classList.toggle("true");
})
