// Definimos las variables
var num, i, num1, num2, num3;

// Inicializamos
i = 0;
num1 = 0;
num2 = 0;
num3 = 0;

// Utilizo un do...while
do {
    num = Math.floor((Math.random() * 99) + 1);

    // Controlamos
    if ((num != num1) && (num != num2) && (num != 3)) {
        // Contamos las veces que entra en el if con i++
        i++;
        if (i == 1) {
            num1 = num;
            document.getElementById('num1').innerHTML = ' ' + num1;
        } else if (i == 2) {
            num2 = num;
            document.getElementById('num2').innerHTML = ' ' + num2;
        } else if (i == 3) {
            num3 = num;
            document.getElementById('num3').innerHTML = ' ' + num3;
        }
    }
}
// Condicion para solo hacer esta opracion do...while tres veces
while (i < 3);