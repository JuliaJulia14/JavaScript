var countries = [];

countries[0] = {
	name: "Австрия",
	flag: "0.gif",
	population: "8,46",
	code: "+43"
}
countries[1] = {
	name: "Бельгия",
	flag: "1.gif",
	population: "11,4",
	code: "+32"
}
countries[2] = {
	name: "Великобритания",
	flag: "2.gif",
	population: "63,4",
	code: "+44"
}
countries[3] = {
	name: "Германия",
	flag: "3.gif",
	population: "82,2",
	code: "+49"
}
countries[4] = {
	name: "Ирландия",
	flag: "4.gif",
	population: "1,4",
	code: "+353"
}
countries[5] = {
	name: "Лихтенштейн",
	flag: "5.gif",
	population: "0,36",
	code: "+423"
}
countries[6] = {
	name: "Люксембург",
	flag: "6.gif",
	population: "0,058",
	code: "+352"
}
countries[7] = {
	name: "Монако",
	flag: "7.gif",
	population: "0,04",
	code: "+377"
}
countries[8] = {
	name: "Нидерланды",
	flag: "8.gif",
	population: "17",
	code: "+31"
}
countries[9] = {
	name: "Франция",
	flag: "9.gif",
	population: "77",
	code: "+33"
}
countries[10] = {
	name: "Швейцария",
	flag: "10.gif",
	population:"8,2",
	code: "+41"
}
countries[11] = {
	name: "Беларусь",
	flag: "11.gif",
	population: "9,5",
	code: "+375"
}
var table = document.createElement('table');
document.body.appendChild(table);
var tr = document.createElement('tr');
table.appendChild(tr);
var th = document.createElement('th');
th.innerHTML = "Страна";
tr.appendChild(th);
th = document.createElement('th');
th.innerHTML = "Флаг";
tr.appendChild(th);
th = document.createElement('th');
th.innerHTML = "Код";
tr.appendChild(th);
th = document.createElement('th');
th.innerHTML = "Население (млн.)";
tr.appendChild(th);
for(var i = 0; i < countries.length; i++){
	tr = document.createElement('tr');
		for(var j = 0; j < 4; j++){
			var td = document.createElement('td');
			switch(j){
				case 0: td.innerHTML = countries[i].name;
					break;
				case 1: td.innerHTML = "<img src =\"img/" + countries[i].flag + "\">";
					break;	
				case 2: td.innerHTML = countries[i].code;
					break;	
				case 3: td.innerHTML = countries[i].population;
					break;		
			}	
			tr.appendChild(td);
		}
	table.appendChild(tr);	
}



	