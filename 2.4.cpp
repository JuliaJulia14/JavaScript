#include <cstdlib>
#include <iostream>
#include <math.h>

using namespace std;
int main() {
setlocale(LC_ALL,"Russian");
double X;
cout <<"������� X";
cout <<endl;
cin >> X;
if((X>1)||(X<-1)){
	cout<<"������� �������� ��������";
}
else{
	cout<<"arcsin "<<X<<"="<<X+(X*X*X)/6+(3*X*X*X*X*X)/40+(15*X*X*X*X*X*X*X)/336;
}

}
