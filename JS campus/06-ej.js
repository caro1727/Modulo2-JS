//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let number1 = parseInt(prompt("Ingresa el primer número"));
let number2 = parseInt(prompt("Ingresa el segundo número"));
let number3 = parseInt(prompt("Ingresa el tercer número"));

let t;
let mayor;

if (number1 > number2) {
  t = number1;
} else {
  t = number2;
}
if (t > number3) {
  mayor = t;
} else {
  mayor = number3;
}

alert("El mayor es: " + " " + mayor);

if (number1 === number2) {
  alert("El numero uno es" + " " + "igual" + " " + "al número dos");
} else if (number1 === number3) {
  alert("El numero uno es" + " " + "igual" + " " + "al número tres");
} else if (number2 === number3) {
  alert("El numero dos es" + " " + "igual" + " " + "al número tres");
}