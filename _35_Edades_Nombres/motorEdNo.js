// Nombre 1 y Edad 1
var nom1 = prompt("Primer nombre: ");
var edad1 = Number(prompt("Edad: "));
document.getElementById('nom1').innerHTML = ' ' + nom1 + ' ' + edad1 + ' años';

// Nombre 2 y Edad 2
var nom2 = prompt("Segundo nombre: ");
var edad2 = Number(prompt("Edad: "));
document.getElementById('nom2').innerHTML = ' ' + nom2 + ' ' + edad2 + ' años';

// Nombre 3 y Edad 3
var nom3 = prompt("Tercer nombre: ");
var edad3 = Number(prompt("Edad: "));
document.getElementById('nom3').innerHTML = ' ' + nom3 + ' ' + edad3 + ' años';

// Valor max() para la edad
var maximo = Math.max(edad1, edad2, edad3);

// Controlamos con un if...else
if (maximo == edad1) {
    document.getElementById('nomM').innerHTML = ' ' + nom1;
} else if (maximo == edad2) {
    document.getElementById('nomM').innerHTML = ' ' + nom2;
} else {
    document.getElementById('nomM').innerHTML = ' ' + nom3;
}