// Definimos la varaiable to para guardar el objeto Date()
var to = new Date();

// Definimos la varaiable datt para guardar ahi el año, el mes y la fecha
var datt = to.getDate() + '-' + (to.getMonth() + 1) + '-' + to.getFullYear();

// Definimos la varaiable time para guardar ahi la hora, los minutos y los segundos
var time = " / hora:  " + to.getHours() + ":" + to.getMinutes() + ":" + to.getSeconds();

// Definimos la varaiable dattTime para guardar tanto la fecha completa como la hora completa
var dattTime = datt + ' ' + time;

// Imprimimos por pantalla
document.getElementById("datCom").innerHTML = ' ' + dattTime;
// Imprimimos por consola
console.log(dattTime);