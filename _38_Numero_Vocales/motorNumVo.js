// Definimos las variables
var vocal, contador, i;
contador = 0;

// Usamos prompt() para que se introduzca una cadena de texto
var strU = prompt(" Introduce una cadena de texto: ");

// Devuelve la longitud de la cadena de texto
var numStr = strU.length;
// Modificamos la cadena de txt ya que la ponemos en mayusculas
strU = strU.toUpperCase();

// Bucle para recorrer la cadena de texto
for (i = 0; i < numStr; i++) {
    // Extrae el caracter i de la cadena de texto
    vocal = strU.charAt(i);
    // Controlamos e igualamos la vocal a las vocales en mayuscula
    if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
        contador++;
    }
}
// Pintamos en el HTML 
document.write("Número de Vocales: " + contador);