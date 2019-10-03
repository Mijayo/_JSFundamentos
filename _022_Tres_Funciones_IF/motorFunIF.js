// Definimos las variables numericas a controlar
var n1, n2;
n1 = 4;
n2 = 2;

// Mostramos las variables
document.getElementById('varS').innerHTML = ' ' + n1 + ' y ' + n2;

// Definimos las operaciones
var suma = n1 + n2;
var resta = n1 - n2;
var mul = n1 * n2;
var div = n1 / n2;

// Mostramos el resultado de las operaciones
document.getElementById('suma').innerHTML = ' ' + suma;
document.getElementById('resta').innerHTML = ' ' + resta;
document.getElementById('mul').innerHTML = ' ' + mul;
document.getElementById('div').innerHTML = ' ' + div;

/* Vamos a controlar si las operaciones aritmeticas de la suma, resta, 
multiplicacion y division son conmutativas */
if (suma == (n2 + n1)) {
    document.getElementById('conSi2').innerHTML = ' suma ';
}
if (div != (n2 - n1)) {
    document.getElementById('conNo').innerHTML = ' resta ';
}
if (mul == (n2 * n1)) {
    document.getElementById('conSi').innerHTML = ' multiplicacion ';
}
if (div != (n2 / n1)) {
    document.getElementById('conNo2').innerHTML = ' division';
}