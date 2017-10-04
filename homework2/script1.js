function generate(s,p) { 
	var N = prompt("Enter the number of array elements"); 
	var min = s-s*p/100; 
	var max = s+s*p/100; 
	var Sum=0; 
	var arr=new Array(N); 
	for(var i=0; i<N; i++){ 
		arr[i]=Math.round((min + Math.random() * (max + 1 - min))*100)/100; 
		Sum+=arr[i]; 
		document.write(arr[i]+'; '); 
	} 
	arr.push(Sum/N);
	return arr; 
} 

function compareNumeric(a, b) {
  return a - b;
}

var s=Number(prompt("Enter the average value")); 
var p=Number(prompt("Enter the deviation")); 
arr=generate(s, p);
document.write("<br\/> The average is "+ arr.pop());
arr.sort(compareNumeric);
document.write("<br\/>Sorted array:<br\/>");
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i]+"; ");
}