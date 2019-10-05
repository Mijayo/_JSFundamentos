// Definimos la funcion fechaRan() con dos parametros para hacer los calculos
function fechaRan(start, end) {
    // 
    return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
}

///////// FECHA RANDOM ///////////
// Imprimimos por pantalla la fecha random dando nosotros una fecha inicial
document.getElementById("ranD").innerHTML = ' ' + fechaRan(new Date(2019, 10, 25), new Date());