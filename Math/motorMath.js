//Expresiones usando Math()

// Math.E o Euler
var n = Math.E;
var m = n.toFixed(3);
document.getElementById("euler").innerHTML = ' ' + m;
console.log(Math.E);

// Logaritmo natural de 2
var n = Math.LN2;
var m = n.toFixed(3);
document.getElementById("log2").innerHTML = ' ' + m;
console.log(Math.LN2);

// Logaritmo natural de 10
var n = Math.LN10;
var m = n.toFixed(3);
document.getElementById("log10").innerHTML = ' ' + m;
console.log(Math.LN10);

// Numero PI
var n = Math.PI;
var m = n.toFixed(3);
document.getElementById("pi").innerHTML = ' ' + m;
console.log(Math.PI);

// Raiz
var n = Math.SQRT2;
var m = n.toFixed(3);
document.getElementById("raiz").innerHTML = ' ' + m;
console.log(Math.SQRT2);

// Metodos Math()

// Coseno 
var n = 40;
var m = Math.cos(n);
document.getElementById("cos").innerHTML = ' ' + m.toFixed(3);

// Seno
var n = 40;
var m = Math.sin(n);
document.getElementById("sen").innerHTML = ' ' + m.toFixed(3);

// Tangente
var n = 40;
var m = Math.tan(n);
document.getElementById("tang").innerHTML = ' ' + m.toFixed(3);

// Aleatorio
var n = Math.random();
document.getElementById("ran").innerHTML = ' ' + n.toFixed(3);