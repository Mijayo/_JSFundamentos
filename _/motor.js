var nombre = "Diego";
var plantilla = `Hola que tal estas ${nombre}`;
console.log(plantilla);

var objeto = {
    nombre: 'Angela'
};
var plan = `<div>Hola que tal estas ${objeto.nombre}</div>`;

window.onload = function() {
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.innerHTML = plan;
}


var alum = {
    nombre: 'Alvaro',
    nota: 5
};

var plant = `<div>Hola como estas ${alum.nombre} ${alum.nota>=5?'aprobado':'suspenso'}`;
window.onload = function() {
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.innerHTML = plant;
}