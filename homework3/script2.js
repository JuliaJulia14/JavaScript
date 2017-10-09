var Accounting ={};
var arr=[
{name:"Alla ", age:44, department:"Otdel_111", experience:68, salary:1100},
{name:"Viktor", age:49, department:"Otdel_222", experience:120, salary:1300},
{name:"Julia", age:23, department:"Otdel_333", experience:18, salary:700},
{name:"Vlad ", age:30, department:"Otdel_111", experience:41, salary:900},
{name:"Dima ", age:21, department:"Otdel_333", experience:11, salary:600}
]
arr.forEach(function(elem){
	elem.print = function(){
		document.write("Name: " + this.name + "; Age "+this.age+"; Department: " + this.department +"; Experience "+this.experience+"; Salary: " + this.salary+"<br\/>");
	}
})

Accounting.Worker=arr;

Accounting.Worker.forEach(function(elem){
	elem.print();
})

Accounting.AddDelete=function(man){
	if (typeof(man)=="object") {
		arr.push(man);
		Accounting.Worker=arr;
		man.print = function(){
			document.write("Name: " + this.name + "; Age "+this.age+"; Department: " + this.department +"; Experience "+this.experience+"; Salary: " + this.salary+"<br\/>");
		}
		document.write("<br\/>Добавляем сотрудника<br\/>")
		Accounting.Worker.forEach(function(elem){
			elem.print();
		})
	} 
	else {
		arr=arr.filter(function(elem){
			return elem.name!=man;
		})
		Accounting.Worker=arr;
		document.write("<br\/>Удаляем сотрудника<br\/>")
		Accounting.Worker.forEach(function(elem){
			elem.print();
		})
	}
}


function compareNumeric(a, b) {
	return a.salary - b.salary;
}
Accounting.Sorting_And_Summa=function(){
	Accounting.Worker.sort(compareNumeric);
	document.write("<br\/>Сортируем сотрудников по зарплате<br\/>")
	Accounting.Worker.forEach(function(elem){
	elem.print();
	})
	var Summa = arr.reduce(function(prev, curr){ 
		return prev + curr.salary; 
	}, 0); 
	document.write("<br\/>The full salary is "+Summa+"<br\/>");
}

Accounting.min_max_average_salary=function(){
	var index_max=0
	var index_min=0;
	var max=Accounting.Worker[0].salary;
	var min=Accounting.Worker[0].salary;
	for (var i = 0; i < Accounting.Worker.length; i++) {
		 if (Accounting.Worker[i].salary > max) {
    		max = Accounting.Worker[i].salary;
    		index_max = i;
  		}
  		if (Accounting.Worker[i].salary < min) {
    		min = Accounting.Worker[i].Salary;
    		index_min = i;
  		}
	}
	var Summa = arr.reduce(function(prev, curr){ 
		return prev + curr.salary; 
	}, 0); 
	var average_salary=Math.round((Summa/arr.length)*100)/100;
	document.write("<br\/>The maximum salary is "+max+"<br\/>The maximum salary is earned "+Accounting.Worker[index_max].name);
	document.write("<br\/>The minimum salary is "+min+"<br\/>The minimum salary is earned "+Accounting.Worker[index_min].name);
	document.write("<br\/>The average salary is "+average_salary+"<br\/>");

}


Accounting.inform_departments=function(){
	var Otdel=[];
	Accounting.Worker.forEach(function(elem){
		Otdel.push(elem.department);
	})
	var Unique_Otdel=Otdel.filter(function(elem,index){
		return Otdel.indexOf(elem)==index;
	});
	var people=[];
	for (var i = 0; i < Unique_Otdel.length; i++) {
		var people = Accounting.Worker.filter(function(el){
			return el.department==Unique_Otdel[i];
		})
		Summa_Age = people.reduce(function(prev, curr){ 
			return prev + curr.age; 
		}, 0); 
		Summa = people.reduce(function(prev, curr){ 
			return prev + curr.salary; 
		}, 0); 
		var average_salary=Math.round((Summa/people.length)*100)/100;
		var average_Age=Math.round((Summa_Age/people.length)*100)/100;
		var max_experience=people[0].experience;
		var index_max_experience=0;
		for (var k = 0; k < people.length; k++) {
			if (people[k].experience > max_experience) {
    			max_experience = people[k].experience;
    			index_max_experience = k;
  			}
		}
		document.write("<br\/>The full salary in "+Unique_Otdel[i]+" is "+Summa);
		document.write("<br\/>The average salary in "+Unique_Otdel[i]+" is "+average_salary);
		document.write("<br\/>Number of people in "+Unique_Otdel[i]+" is "+people.length);
		document.write("<br\/>The average age in "+Unique_Otdel[i]+" is "+average_Age);
		document.write("<br\/>The longest experience in "+Unique_Otdel[i]+" is "+people[index_max_experience].name+"<br\/>");

	}

}

var a={name:"Egor", age:30, department:"Otdel_222", experience:0, salary:500}
Accounting.AddDelete(a);

Accounting.AddDelete("Julia");

Accounting.Sorting_And_Summa();

Accounting.min_max_average_salary();

Accounting.inform_departments();

