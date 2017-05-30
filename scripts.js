var a = prompt('Wpisz pierwszą zmienną');
var b = prompt('Wpisz drugą zmienną');
var wynikRownania = (a * a) + (2 * a * b) - (b * b);
console.log('Equation with a: ' + a + ' and b: ' + b + ' equals: ' + wynikRownania);
if(wynikRownania > 0)  {
 	console.log('Wynik równania jest liczbą dodatnią.')
} else if(wynikRownania < 0) {
	console.log('Wynik równania jest liczbą ujemną.') 
} else {
 alert('Wynik równania jest równy zero')
}
