// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let number = 1;
let numero = parseInt(prompt("Ingresa un número"));

while (number <= numero) {
  if (number % 5 == 0) {
    console.log(`${number} es múltiplo de 5`);
  }
  number++;
}