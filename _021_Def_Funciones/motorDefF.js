// Definimos la expresion suma con una funcion dentro
var suma = function(a, b) {
    return a + b;
};

// Mostramos la expresion suma
document.getElementById("expr1").innerHTML = ' ' + suma;

// Mostramos el resultado de pasar dos numeros como parametros 
document.getElementById("expr1-2").innerHTML = ' ' + suma(2, 2);
console.log(suma(2, 2));

// Definimos la expresion nombre con una funcion dentro
var nombre = function(nombre) {
    return 'Hola ' + nombre;
};

// Pedimos el nombre del usuario y lo pasamos a mayusculas con toUpperCase()
var nom = prompt('¿Como te llamas?').toUpperCase();
console.log(nom);

// Mostramos la expresion de funcion nombre
document.getElementById("expr2").innerHTML = ' ' + nombre;

// Mostramos el nombre introducido en el prompt
document.getElementById("expr2-1").innerHTML = ' ' + nombre(nom);