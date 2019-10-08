// Pedimos que introduza una cadena de texto
var str = prompt("Introduce un Texto");

// Pintamos la cadena aportada
document.getElementById('strIN').innerHTML = ' ' + str.toUpperCase();

document.getElementById('strOu').innerHTML = ' ' + str.split("").reverse().join("").toLocaleUpperCase();

var numC = str.length;
var j;
var car;
var salida = "";
var cadena_espac = "";
var cadena_reves = "";

// Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
for (j = 0; j < numC; j++) {
    car = str.charAt(j);
    // Si el caracter es un espacio
    if (car != " ") {
        cadena_espac += car;
        cadena_reves += car;
    }
}
if (cadena_espac == cadena_reves) {
    document.getElementById('paliN').innerHTML = "El texto es un palíndromo";
} else {
    document.getElementById('paliN').innerHTML = "El texto NO es un palíndromo";
}