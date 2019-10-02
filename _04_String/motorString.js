// Definimos los Strings
var str1 = '12345';
console.log(str1);
var str2 = '678910';
console.log(str2);

// Mostramos los Strings
document.getElementById("str1").innerHTML = ' ' + str1 + ' ';
document.getElementById("str2").innerHTML = ' ' + str2 + '.';

// Convertimos los Strings a int con Number()
var n1 = Number(str1);
var n2 = Number(str2);
// Mostramos la conversion a int
document.getElementById("n1").innerHTML = ' ' + n1 + ' ';
document.getElementById("n2").innerHTML = ' ' + n2 + '.';

// Suma
var suma = n1 + n2;
document.getElementById("suma").innerHTML = ' ' + suma;