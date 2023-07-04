//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let number1 = parseInt(prompt("Ingresa el primer número"));
let number2 = parseInt(prompt("Ingresa el segundo número"));

if (number1 > number2){
    alert("El" + " " + number1 + " " + "es mayor que el" + " " + number2)
} else if( number1 < number2){
    alert("El" + " " + number1 + " " + "es menor que el" + " " + number2)
}