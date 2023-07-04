// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. 

let helado = prompt("¿Con qué topping deseas tu helado?");

if (helado === "Oreo"){
    alert("Tiene un costo de 10 MXN")
} else if (helado === "KitKat"){
    alert("Tiene un costo de 15 MXN")
} else if (helado === "Brownie"){
    alert("Tiene un costo de 20 MXN")
} else if (helado === "Sin topping"){
    alert("Tiene un costo de 50 MXN")
} else {
    alert("No tenemos este topping")
}