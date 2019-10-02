// Definimos el Array
var arrDias = ['Lunes', 'Martes', 'Miercoles',
    'Jueves', 'Viernes'
];
console.log(arrDias);

// Usamos push() para meter Sabado en el Array
arrDias.push('Sabado');

// Mostramos el Array
document.getElementById("arrDS").innerHTML = ' ' + arrDias;