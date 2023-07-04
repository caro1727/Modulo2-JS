// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

let vehiculo = prompt("Seleccione un vehículo: coche, moto o autobus");

let kilometrosRecorridos = parseInt(prompt("Escribe los kilometros recorridos"));

let precioKilometroCoche = 0.2;
let precioKilometroMoto = 0.1;
let precioKilometroAutobus = 0.5;

let totalPagar;
let ceroAcien = 5;
let masDeCien = 10;

// let totalPagar = precioKilometroAutobus * kilometrosRecorridos + extraKilometrosConsumo;

if (kilometrosRecorridos <= 100 && vehiculo === "coche") {
  totalPagar = precioKilometroCoche * kilometrosRecorridos + ceroAcien;
  alert(totalPagar);
} else if (kilometrosRecorridos <= 100 && vehiculo === "autobus") {
  totalPagar = precioKilometroAutobus * kilometrosRecorridos + ceroAcien;
  alert(totalPagar);
} else if (kilometrosRecorridos <= 100 && vehiculo === "moto") {
  totalPagar = precioKilometroMoto * kilometrosRecorridos + ceroAcien;
  alert(totalPagar);
} else if (kilometrosRecorridos > 100 && vehiculo === "autobus") {
  totalPagar = precioKilometroAutobus * kilometrosRecorridos + masDeCien;
  alert(totalPagar);
} else if (kilometrosRecorridos > 100 && vehiculo === "moto") {
  totalPagar = precioKilometroMoto * kilometrosRecorridos + masDeCien;
  alert(totalPagar);
} else if (kilometrosRecorridos > 100 && vehiculo === "coche") {
  totalPagar = precioKilometroCoche * kilometrosRecorridos + masDeCien;
  alert(totalPagar);
}