// Definimos el objeto persona
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

// Mostramos el Objeto persona
document.getElementById("objP").innerHTML = ' ' + persona.nombre;

// Mostramos los atributos del objeto persona
document.getElementById("nom").innerHTML = ' ' + persona.nombre;
document.getElementById("ape").innerHTML = ' ' + persona.apellido;
document.getElementById("ide").innerHTML = ' ' + persona.id;
document.getElementById("dir").innerHTML = ' ' + persona.direccion;
document.getElementById("cp").innerHTML = ' ' + persona.cp;
document.getElementById("nomC").innerHTML = ' ' + persona.nomCom();
document.getElementById("dirC").innerHTML = ' ' + persona.dirCom();
document.getElementById("tlf").innerHTML = ' ' + persona.tlf;
document.getElementById("hor").innerHTML = ' ' + persona.horoscopo;

// prompt() para pedir los argumentos que luego se pasaran como parametros a la funcion datPer()
var tlf = prompt('¿Cual es tu num de telefono?');
var horoscopo = prompt('¿Cual es tu horoscopo?').toUpperCase();

// Mostramos los datos pedidos por pantalla usando prompt() como parametros
document.getElementById("tlfUser").innerHTML = ' ' + persona.datPer(this.tlf, ' ');
document.getElementById("hrUser").innerHTML = ' ' + persona.datPer(this.horoscopo, ' ');