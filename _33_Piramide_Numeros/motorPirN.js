// BUCLE FOR PARA RECORRER DE 1 A 25
for (var i = 1; i <= 25; i++) {
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (var rep = 0; rep < i; rep++) {
        // IMPRIMIMOS EL NÚMERO i, i VECES hasta llegar al 25
        document.write(i);

        // Lo sacamos por consola paara ver cuantas veces se repite el mimso numero
        console.log(i);
    }
    // Damos un salto de linea para imprimir cada numero en una linea diferente
    document.write('<br>');
}