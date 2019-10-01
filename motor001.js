// Def de los NUM
let num1 = 4;
let num2 = 2;
document.getElementById("num1").innerHTML = " " + num1 + " ";
document.getElementById("num2").innerHTML = " " + num2;

// Suma
document.getElementById("suma").innerHTML = " " + (num1 + num2);
console.log(num1 + num2);

// Resta
document.getElementById("resta").innerHTML = " " + (num1 - num2);
console.log(num1 - num2);

// Division
document.getElementById("division").innerHTML = " " + (num1 / num2);
console.log(num1 / num2);

// Multiplicacion
document.getElementById("multiplicacion").innerHTML = " " + (num1 * num2);
console.log(num1 * num2);

// Modulo
document.getElementById("modulo").innerHTML = " " + (num1 % num2);
console.log(num1 % num2);

// Potencia
document.getElementById("potencia").innerHTML = " " + (num1 ** num2);
console.log(num1 ** num2);

// Incremento
document.getElementById("incremento").innerHTML = " " + (num1++) + " y " + (num2++);
console.log((num1++) + " " + (num2++));

// Decremento
document.getElementById("decremento").innerHTML = " " + (num1--) + " y " + (num2--);
console.log((num1--) + " " + (num2--));