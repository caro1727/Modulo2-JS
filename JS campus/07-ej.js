//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. 

let dia = prompt("Ingresa un día de la semana");

if (dia === "Lunes"){
    alert("Hoy es Lunes")
} else if (dia === "Viernes"){
    alert("Hoy es Viernes")
} else if (dia === "Sabado"){
    alert("Hoy es Sabado")
} else if (dia === "Domingo"){
    alert("Hoy es Domingo")
} else {
    alert("Tu respuesta no es válida")
}