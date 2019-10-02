// Definimos el Array de frutas
var arrFru = ['Manzana', 'Naranja', 'Platano', 'Fresa', 'Kiwi', 'Mango'];
// Usamos slice() para copiar el array usando dos codigos equivalentes
var arrFru2 = arrFru.slice();
console.log(arrFru2);

// Mostramos el Array de frutas
document.getElementById("arrFru").innerHTML = ' ' + arrFru2;

// Mostramos el tamaño del Array frutas 
document.getElementById("arrFruL").innerHTML = ' ' + arrFru2.length;