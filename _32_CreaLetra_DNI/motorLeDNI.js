// Pedimos el numero por prompt()
do {
    var numDNI = prompt("Ingresa un numero no superior a 8 digitos");
    numDNI.toString();
    var longDNI = numDNI.length;
} // controlamos que el numero introducido cumpla las especificaciones
while (longDNI < 8 || longDNI > 8);

// Vemos la long del numero introducido
console.log(longDNI);

// Mostramos el numero
document.getElementById("numDNI").innerHTML = " " + numDNI;

// Calculamos la letra
var calcDNI = numDNI % 23;
console.log(calcDNI);

/* Dependiendo del resto de la division
tenemos que signar una letra como sigue:
T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E
*******************************************************************/

// Utilizamos un switch para cada caso
switch (calcDNI) {
    case 1:
        document.getElementById("letDNI").innerHTML = " - T";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - T";
        break;
    case 2:
        document.getElementById("letDNI").innerHTML = " - R";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - R";
        break;
    case 3:
        document.getElementById("letDNI").innerHTML = " - W";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - W";
        break;
    case 4:
        document.getElementById("letDNI").innerHTML = " - A";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - A";
        break;
    case 5:
        document.getElementById("letDNI").innerHTML = " - G";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - G";
        break;
}