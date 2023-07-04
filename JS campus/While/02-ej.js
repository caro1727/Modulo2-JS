// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let number1 = parseInt(prompt("Ingresa un primer número entre 1 y 50"));
let number2 = parseInt(prompt("Ingresa un segundo número entre 1 y 50"));

while(number1 >= 1 && number2 <=50){
    console.log("¡Loteria!")
    number1++;
}
 