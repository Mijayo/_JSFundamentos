// Definimos las variables
var resultado, i;

// Bucle para obtener los números aleatorios.
for (i = 0; i <= 15; i++) {
    // Multiplicamos por 3 ya que son tres opciones, ó 1 ó X ó 2
    num = Math.floor(Math.random() * 3);
    // Controlamos
    if (num == 3) {
        num = x;
    }
    // Pintamos en el HTML con document.write()
    document.write("Resultado " + i + ": " + num + "<br>");
}