// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

// let numero = [10,40,30,20,15,5];
// numero.sort();
// console.log(numero)

const array = [10, 40, 30, 20, 15, 50];
array.sort();
console.log(array);
let menor = array[0];
let mayor = array[array.length - 1];
  console.log(`El valor menor es: ${menor} y el numero mayor es: ${mayor}`);
