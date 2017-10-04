var a, b, c;
a=prompt("Enter the first number");
b=prompt("Enter a math operation");
c=prompt("Enter the second number");
if (isNaN(Number(a))||isNaN(Number(c))||a==null||a==''||b==null||b=='') {
	confirm("You did not enter a number");
} 
else {
	a=Number(a);
	c=Number(c);
	switch(b) {
		case '+':
			document.write(a+" + "+c+" = "+(a+c));
			break;

		case '-':
			document.write(a+" - "+c+" = "+(a-c));
			break;

		case '*':
			document.write(a+" * "+c+" = "+(a*c));
			break;

		case '/':
			if (c==0) {
				document.write("You can not divide by zero");
				break;
			}
			else{
				document.write(a+" / "+c+" = "+(a/c));
				break;
			}	

		case '^':
			document.write(a+" ^ "+c+" = "+(Math.pow(a,c)));
			break;	

		default:
			document.write("You entered is not a mathematical operation");
			break;
	}
}