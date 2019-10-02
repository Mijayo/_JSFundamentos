// Definimos el Array
var arrMeses = ['Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre',
    'Diciembre'
];
console.log(arrMeses.length);


// Mostramos el Array
document.getElementById("arrM").innerHTML = ' ' + arrMeses;

// Mostramos la posicion de Abril
document.getElementById("arrPosAbr").innerHTML = ' ' + arrMeses.indexOf('Abril');