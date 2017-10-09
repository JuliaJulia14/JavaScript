var names=["Alla","Viktor","Julia","Dima","Marina","Vlad","Alisa","Ilya","Lera","Roma"]
var cities=["Minsk","Grodno","Gomel","Mogilev","Brest","Vitebsk"];
var people=[];
for (var i = 0; i < names.length; i++) {
	people[i]={
		name:names[i],
		city:cities[Math.floor(Math.random()*(cities.length))],
		age:Math.floor(Math.random()*(80)),
		print:function(){
			document.write("Name: "+this.name+"; Сity: "+this.city+"; Age: "+this.age+"<br\/>")

		}
	}
}
function compareNumeric(a, b) {
  return a.age - b.age;
}
people.sort(compareNumeric);

people.forEach(function(elem){
	elem.print();
})

