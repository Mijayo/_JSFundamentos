//IMPRIMOS UNA LÍNEA HORIZONTAL   
document.write("<hr>");

// DECLARAMOS LAS VARIABLES
var i;
var j = 100;

// BUCLE DESDE 1 HASTA j
for (i = 1; i <= j; i++) {

    //IMPRIMIMOS EL NÚMERO i
    document.write(i);

    // SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0, ES MULTIPLO DE 4
    if (i % 4 == 0) {
        document.write(' propiedad: multiplo de 4');
    }
    // SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0, ES MULTIPLO DE 9
    if (i % 9 == 0) {
        document.write(' propiedad: multiplo de 9');
    }

    ////////////////////////
    document.write("<br>");
    ////////////////////////

    // SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}