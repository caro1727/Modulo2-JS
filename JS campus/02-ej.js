//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let number = parseInt(prompt("Escribe un número"));

if (number %2 === 0){
    alert("El numero:" + " " + number + " " + "si es divisible entre 2")
} else{
    alert("El numero:" + " " + number + " " + "NO es divisible entre 2")
}