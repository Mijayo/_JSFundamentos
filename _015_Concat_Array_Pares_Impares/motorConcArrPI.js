// Definimos el Array con datos Pares
var arrDP = [2, 4, 6, 8, 10, 12];
console.log(arrDP);

// Definimos el Array con datos Impares
var arrDI = [1, 3, 5, 7, 9, 12];
console.log(arrDI);

// Mostramos el Array datos Pares
document.getElementById("arrDP").innerHTML = ' ' + arrDP;

// Mostramos el Array datos Impares
document.getElementById("arrDI").innerHTML = ' ' + arrDI;

// Concatenamos los Array 
var concat = document.getElementById("arrConc").innerHTML = ' ' + arrDI.concat(arrDP);