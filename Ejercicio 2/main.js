/* 

Ejercicio: Que me pongo

- Crea un programa que te haga una serie de preguntas.
- Al finalizar el programa, deberá mostrate o decirte que prenda puedes ponerte.
- Al menos se debe hacer 5 preguntas.
- Pueden hacer uso de :



*/

let questionOne = prompt("que prefieres jean o short");
let questionTwo = prompt("que prefieres camisa o camiseta");
let questionTree = prompt("que prefieres zapatos o tennis");
let questionFour = prompt("que prefieres gorra o pañoleta");
let questionFive = prompt("que prefieres lentes o sin lentes");

if ((questionOne == "jean" && (questionTwo == "camisa") && (questionTree == "zapatos") && (questionFour == "gorra") && (questionFive == "lentes"))) {
  document.write("<img src='https://www.vectorizados.com/muestras/personaje-anim-con-gorro-naranja.jpg'>");
}
 else {
    document.write("<img src='https://w7.pngwing.com/pngs/54/995/png-transparent-human-behavior-cartoon-facial-hair-character-chibi-%C4%91oan-fictional-character-cartoon-glasses.png'>");
    
}