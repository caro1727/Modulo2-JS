//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion = parseInt(prompt("Ingresa un número del 1 al 10"));

if (calificacion > 10){
    alert("Error")
} else if (calificacion < 6){
    alert("Reprobado")
} else if (calificacion >= 6 && calificacion <= 8){
    alert("Regular")
} else if (calificacion === 9){
    alert("Bien")
} else if (calificacion === 10){
    alert("Excelente")
} 