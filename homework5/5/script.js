var N=Number(prompt("Введите N"));
var arr=[];
var f;
var del=0;
for (var i = 0; i < N-1; i++) {
	arr[i]=2+i;
}
function prost(a){
	var f=true;
	for (var i = 2; i <= a/2; i++) {
		if (a%i==0) {f=false} 
	}
	return f;
}


var table = document.createElement('table');
document.body.appendChild(table);

for (var i = 0; i <=N/20 ; i++) {
	var tr=document.createElement('tr');
	table.appendChild(tr);
	for (var j = 0; j <20; j++) {
		var td=document.createElement('td');
		if (arr[i*20+j]) {
			td.innerHTML=arr[i*20+j];
			tr.appendChild(td);	
		}
		
	}
}
var timerID=setInterval(anim,1000)
function anim(){
	for (var i = 0; i <=N/20 ; i++) {
		for (var j = 0; j <20; j++) {
			if (!(prost(arr[i*20+j]))){
				table.rows[i].cells[j].setAttribute("class", "neprost");
				del+=500;			
			}
		}
	}
}



	