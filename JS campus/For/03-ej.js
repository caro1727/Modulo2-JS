// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
let soloNumeros = [];

for (let i = 0; i <= arreglo.length - 1; i++) {
  let numeros = arreglo[i];

  if (numeros !== String(numeros)) {
    soloNumeros.push(numeros);
    console.log(soloNumeros);
  }
}