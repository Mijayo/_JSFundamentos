// Definimos el objeto coche
var coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Negro',
    acabado: ['Premium', 'Elite', 'RS', 'GT'],
    peso: [1500, 1800, 1500, 1340],
    contaminacion: 0,
    combustible: 'Diesel',
    fiabilidad: 100
};

// Mostramos el Objeto coche 
document.getElementById("objC").innerHTML = ' ' + coche.marca;

/// Mostramos las propiedades del objeto coche 
document.getElementById("marca").innerHTML = ' ' + coche.marca;
document.getElementById("modelo").innerHTML = ' ' + coche.modelo;
document.getElementById("color").innerHTML = ' ' + coche.color;
document.getElementById("acabado").innerHTML = ' ' + coche.acabado[0] + ' - ' + coche.acabado[1] +
    ' - ' + coche.acabado[2] + ' - ' + coche.acabado[3];
document.getElementById("peso").innerHTML = ' ' + coche.peso[0] + ' - ' + coche.peso[1] +
    ' - ' + coche.peso[2] + ' - ' + coche.peso[3];
document.getElementById("contaminacion").innerHTML = ' ' + coche.contaminacion;
document.getElementById("combustible").innerHTML = ' ' + coche.combustible;
document.getElementById("fiabilidad").innerHTML = ' ' + coche.fiabilidad;