// Definimos e inicializamos la variable aRR donde guardaremos el str dado por el usuario
var aRR = '';

// Utilizo un do while
do {
    // Realizamos la pregunta
    var preG = prompt('Ingresa una cadena de caracteres');

    // Si el valor introducido es un espacio
    if (preG == '') {
        // Asignamos
        aRR += preG;
    } else {
        // Concatenamos con guion
        aRR += preG + ' - ';
    }

}
// Utilizo el metodo confirm() de Window (DOM Window)
while (confirm("¿Desea seguir?"));

// Si se pulsa cancelar en la pantalla confirm() imprimo la variable aRR
document.getElementById('aRR').innerHTML = ' ' + aRR;