// Def funcion numerica
function misNumeros() {
  var mens, x;
  mens = prompt("Introduce un numero entre 5 y 10");
  try {
    if (mens == " ") {
      document.getElementById("campV").innerHTML = " campo vacio ";
      throw "campo vacio";
    }
    if (isNaN(mens)) {
      document.getElementById("noN").innerHTML =
        " el valor introducido no es un numero ";
      throw "el valor introducido no es un numero";
    }
    // transformamos a numero
    x = Number(mens);
    if (x < 5) {
      document.getElementById("numIn").innerHTML = " numero mas bajo que el 5 ";
      throw "numero mas bajo que el 5";
    }
    if (x > 10) {
      document.getElementById("numSup").innerHTML =
        " numero mas grande que el 10 ";
      throw "numero mas grande que el 10";
    }
    if (x >= 5 || x <= 10) {
        document.getElementById("numCo").innerHTML = ' ' + x;
    }
  } catch (err) {
    // message.innerHTML = "Input is " + err;
  }
}

/*var d = new Date("10/25/1989");

if (Object.prototype.toString.call(d) === "[object Date]") {
    // it is a date
    if (isNaN(d.getTime())) {
        // d.valueOf() could also work
        // date is not valid
    } else {
        // date is valid
    }
} else {
    // not a date
}

console.log(d.toString()); shows 'Invalid Date'
console.log(typeof d);  shows 'object'
console.log(d instanceof Date);  shows 'true'*/
