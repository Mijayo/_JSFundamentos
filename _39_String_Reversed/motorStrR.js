// Pedimos que introduza una cadena de texto
var str = prompt("Introduce un Texto");

// Pintamos la cadena aportada
document.getElementById('strIN').innerHTML = ' ' + str.toUpperCase();

// Funcion para escribir lo introducido al reves
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Pintamos la cadena aportada al reves
document.getElementById('strOu').innerHTML = ' ' + reverseString(str).toUpperCase();