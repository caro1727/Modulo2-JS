let nameUser = prompt("Ingrese su nombre:");
let weightUser = parseInt(prompt("Ingrese el peso en kg: "));
let height = parseInt(prompt("Ingrese su altura: "));

let icm = weightUser / Math.pow(height / 100, 2);

document.write(`

<h1>Indice de Masa Corporal</h1> 

<hr>
<h3> Señor ${nameUser} su IMC es el siguiente: </h3>
<p style="color:blue" > <strong> ${icm} </strong> </p>
<hr>
<br>

`);

//  ** se guarda la informacion en un objeto

let user = [
  {
    name: nameUser,
    weight: weightUser,
    height: height,
    icm: icm,
  },
];

const userImc = user.map((e) => {
  return `Su nombre es ${e.name}, su peso es de ${e.weight}, su altura es de ${e.height}, la cual su IMC es el siguiente --> ${e.icm}`;
});

document.write(userImc);
console.log(userImc);