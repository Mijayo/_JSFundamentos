// Pedimos la nota
var nota = prompt('Ingresa una nota de 0 a 10');

// Mostramos la nota 
document.getElementById('notSo').innerHTML = ' ' + nota;

// Control de flujo para saber que calificacion recibe acorde a la nota aportada por el usuario
if (nota <= 3) {
    document.getElementById('notMD').innerHTML = ' ' + nota + ' muy deficiente';
} else if (nota < 5) {
    document.getElementById('notI').innerHTML = ' ' + nota + ' insuficiente';
} else if (nota < 6) {
    document.getElementById('notSF').innerHTML = ' ' + nota + ' suficiente';
} else if (nota < 7) {
    document.getElementById('notB').innerHTML = ' ' + nota + ' bien';
} else if (nota < 9) {
    document.getElementById('notN').innerHTML = ' ' + nota + ' notable';
} else {
    document.getElementById('notS').innerHTML = ' ' + nota + ' sobresaliente';
}