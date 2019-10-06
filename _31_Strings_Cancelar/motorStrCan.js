// Pedimos la nota
do {
    var preG = prompt('Ingresa una cadena de caracteres');
} while (preG != null);
console.log(preG);

var aRR = [];
for (var i = 0; i < aRR.length; i++) {
    var x = aRR.push(i);
}
console.log(aRR);

// Mostramos la nota 
document.getElementById('aRR').innerHTML = ' ' + aRR;