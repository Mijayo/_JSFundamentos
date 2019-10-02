// Definimos el Array
var arrDias = ['Lunes', 'Martes', 'Miercoles',
    'Jueves', 'Viernes'
];
console.log(arrDias);

// Ponemos el sabado con push()
arrDias.push('Sabado');

// Usamos unshift() para meter Domingo en el Array en la primera posicion
arrDias.unshift('Domingo');

// Mostramos el Array
document.getElementById("arrD").innerHTML = ' ' + arrDias;

// Usamos shift() para eliminar la primera posicion del Array
arrDias.shift();


// Mostramos el Array sin el primer dia
document.getElementById("arrDEP").innerHTML = ' ' + arrDias;