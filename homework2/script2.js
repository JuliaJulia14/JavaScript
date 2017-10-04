function polinom(arr) {
	var x=arr[arr.length - 1];
	var Sum=0;
	for (var i = 0; i < arr.length -1; i++) {
		if (i==0) {
			document.write("("+arr[i]+")"+" * x^"+i+" ")
			Sum+=Number(arr[i])*Math.pow(x,i);
		}
		else{
			document.write("+ ("+arr[i]+")"+" * x^"+i+" ")
		Sum+=Number(arr[i])*Math.pow(x,i);
		}
	}
	return Sum;
}

var arr=prompt("Enter the coefficients of the polynomial in the space").split(" ")
arr.push(prompt("Enter x"));
var Sum=polinom(arr);
document.write(" , at x = "+arr[arr.length-1]+" equals "+Sum)