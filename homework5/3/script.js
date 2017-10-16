var N=Number(prompt("Введите N"))
var table = document.createElement('table');
document.body.appendChild(table);

for (var i = 0; i <= N; i++) {
	var tr=document.createElement('tr');
	table.appendChild(tr);
	for (var j = 0; j <= N; j++) {
		var td=document.createElement('td');
		if (!i) {
			if (j) {
				td.innerHTML=j;
			} 
		}
		else {
			if(!j){
				if(i){
					td.innerHTML=i
				}
			}
			else{
				td.innerHTML=i*j;
				if(i == j){
					td.setAttribute("class", "diag");
				}
			}
		}
		tr.appendChild(td);		
	}
}
	


	