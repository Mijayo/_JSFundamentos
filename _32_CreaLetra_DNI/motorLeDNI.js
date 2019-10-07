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
    case 6:
        document.getElementById("letDNI").innerHTML = " - M";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - M";
        break;
    case 7:
        document.getElementById("letDNI").innerHTML = " - Y";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - Y";
        break;
    case 8:
        document.getElementById("letDNI").innerHTML = " - F";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - F";
        break;
    case 9:
        document.getElementById("letDNI").innerHTML = " - P";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - P";
        break;
    case 10:
        document.getElementById("letDNI").innerHTML = " - D";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - D";
        break;
    case 11:
        document.getElementById("letDNI").innerHTML = " - X";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - X";
        break;
    case 12:
        document.getElementById("letDNI").innerHTML = " - B";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - B";
        break;
    case 13:
        document.getElementById("letDNI").innerHTML = " - N";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - N";
        break;
    case 14:
        document.getElementById("letDNI").innerHTML = " - J";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - J";
        break;
    case 15:
        document.getElementById("letDNI").innerHTML = " - Z";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - Z";
        break;
    case 16:
        document.getElementById("letDNI").innerHTML = " - S";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - S";
        break;
    case 17:
        document.getElementById("letDNI").innerHTML = " - Q";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - Q";
        break;
    case 18:
        document.getElementById("letDNI").innerHTML = " - V";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - V";
        break;
    case 19:
        document.getElementById("letDNI").innerHTML = " - H";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - H";
        break;
    case 20:
        document.getElementById("letDNI").innerHTML = " - L";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - L";
        break;
    case 21:
        document.getElementById("letDNI").innerHTML = " - C";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - C";
        break;
    case 22:
        document.getElementById("letDNI").innerHTML = " - K";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - K";
        break;
    case 23:
        document.getElementById("letDNI").innerHTML = " - E";
        document.getElementById("numDNIL").innerHTML = " " + numDNI + " - E";
        break;
}