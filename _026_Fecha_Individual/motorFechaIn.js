// Definimos la varaiable to para guardar el objeto Date()
var to = new Date();

///////// DIA ///////////
// Imprimimos por pantalla el dia usando getDate()
document.getElementById("dA").innerHTML = ' ' + to.getDate();

///////// MES ///////////
// Imprimimos por pantalla el mes usando getMonth()
document.getElementById("mS").innerHTML = ' ' + (to.getMonth() + 1);

///////// AÑO ///////////
// Imprimimos por pantalla el año usando getFullYear()
document.getElementById("yR").innerHTML = ' ' + to.getFullYear();

///////// FECHA COMPLETA ///////////
// Definimos la varaiable datt para guardar la fecha completa 
var datt = to.getDate() + '-' + (to.getMonth() + 1) + '-' + to.getFullYear();
// Imprimimos por pantalla la fecha completa
document.getElementById("datCom").innerHTML = ' ' + datt;


//////////// HORA ///////////
// Imprimimos por pantalla la hora usando getHours()
document.getElementById("hR").innerHTML = ' ' + to.getHours();

//////////// MINUTOS ///////////
// Imprimimos por pantalla los minutos usando getMinutes()
document.getElementById("miN").innerHTML = ' ' + to.getMinutes();

//////////// SEGUNDOS ///////////
// Imprimimos por pantalla los segundos usando getSeconds()
document.getElementById("seG").innerHTML = ' ' + to.getSeconds();

///////// HORA COMPLETA ///////////
// Definimos la varaiable time para guardar ahi la hora, los minutos y los segundos
var time = to.getHours() + ":" + to.getMinutes() + ":" + to.getSeconds();

// Imprimimos la hora completa por pantalla
document.getElementById("hCom").innerHTML = ' ' + time;