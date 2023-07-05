// 1. Crea un programa que imprima en consola los números impares del 1 al 50.

let number = 50;

for (let i = 0; i <= number; i++) {
  if (i % 2 != 0) {
    console.log(`Los numeros impares son : ${[i]}`);
  }
}