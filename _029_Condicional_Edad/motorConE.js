// Definimos la funcion getEdad()
function getEdad() {
    // Obtenemos el valor del campo de texto
    var inputEdad = document.getElementById("edadIN").value;
    // Controlamos con un if si el valor introducido es menor que 18
    if (inputEdad < 18) {
        // Ponemos el valor del campo de texto en cero de nuevo
        document.getElementById("edadIN").value = ' ';
        // Es menor de 18 y no tiene acceso
        alert('😥😓😕' + '\n Eres menor de 18 años y no puedes acceder al site solicitado');
    } else {
        // Ponemos el valor del campo de texto en cero de nuevo
        document.getElementById("edadIN").value = ' ';
        // Es mayor de 18 y tiene acceso
        alert('😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀' + '\n Eres mayor de 18 años y tienes acceso al site solicitado');
        // Redirigimos al site 
        window.open('https://9gag.com/video');
    }
}