//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let number = parseInt(prompt("Ingresa tu número de cliente."));

if (number === 1000){
    alert("Ganaste un premio")
} else{
    alert("Lo sentimos, sigue participando")
}