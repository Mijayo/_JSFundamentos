// Definimos el objeto persona
var tlf = prompt('¿Cual es tu num de telefono?');
var horoscopo = prompt('¿Cual es tu horoscopo?');

var persona = {
    nombre: 'Diego',
    apellido: 'Vallejo',
    id: 5376,
    direccion: 'Madrid',
    cp: 28223,
    nomCom: function() {
        return this.nombre + ' ' + this.apellido;
    },
    dirCom: function() {
        return this.direccion + ' ' + this.cp;
    },
    tlf: null,
    horoscopo: null,
    datPer: function(tlf, horoscopo) {
        return tlf + ' ' + horoscopo;
    }
};

// Mostramos el Objeto coche 
document.getElementById("objP").innerHTML = ' ' + persona.datPer(this.tlf, this.horoscopo);

// Mostramos las propiedades del objeto coche 
document.getElementById("marca").innerHTML = ' ' + coche.marca;
document.getElementById("modelo").innerHTML = ' ' + coche.modelo;
document.getElementById("color").innerHTML = ' ' + coche.color;
document.getElementById("acabado").innerHTML = ' ' + coche.acabado.premium + ' - ' + coche.acabado.elite +
    ' - ' + coche.acabado.gT;
document.getElementById("peso").innerHTML = ' ' + coche.peso[0] + ' - ' + coche.peso[1] +
    ' - ' + coche.peso[2] + ' - ' + coche.peso[3];
document.getElementById("contaminacion").innerHTML = ' ' + coche.contaminacion;
document.getElementById("combustible").innerHTML = ' ' + coche.combustible;
document.getElementById("fiabilidad").innerHTML = ' ' + coche.fiabilidad;