var a, counter;
a=prompt("Enter the string");
counter=0;
for (var i = 0; i < a.length; i++) {
	if (a[i]=='(') {
		counter++;
	} 
		else {
			if (a[i]==')') {
				counter--;
				if (counter<0) {
					break;
				}
			}
		}
}
if (counter==0) {
	document.write("Brackets placed true")
} 
	else {
		document.write("Brackets placed not true")
	}