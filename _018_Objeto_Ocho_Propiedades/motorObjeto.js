// Definimos el objeto coche
var coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Negro',
    acabado: 'Premium',
    peso: 1500,
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
document.getElementById("acabado").innerHTML = ' ' + coche.acabado;
document.getElementById("peso").innerHTML = ' ' + coche.peso;
document.getElementById("contaminacion").innerHTML = ' ' + coche.contaminacion;
document.getElementById("combustible").innerHTML = ' ' + coche.combustible;
document.getElementById("fiabilidad").innerHTML = ' ' + coche.fiabilidad;