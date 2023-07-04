//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let number = parseInt(prompt("Ingresa un número"));

if (number % 2 === 0){
    alert("El número:" + " " + number + " " + "es par")
} else{
    alert("El número:" + " " + number + " " + "NO es par")
}