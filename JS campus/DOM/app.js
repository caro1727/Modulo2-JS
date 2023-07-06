let formulario = document.getElementById("formulario"); //Obtenemos el formulario
let formularioData = new FormData(formulario); //declaramos un FormData del formulario

console.log(formularioData);

//eventos del boton del formulario

//El formData obtenemos los datos del formulario

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //cancelamos el evento para que no recarge la pagina
  console.log("se detecto un envio del formulario");

  let formularioData = new FormData(formulario); //declaramos un FormData del formulario
  console.log(formularioData);

  //vamos a obtener el id donde vamos a agregar la informacion del formulario
  let tablaData = document.getElementById("contentBodyTable"); //obtenemos el id de la tabla tbody
  let newFilaTbody = tablaData.insertRow(-1); // el  -1 es equivalente a insertarla a lo ultimo  --> crea el tr

  let newCellTbody = newFilaTbody.insertCell(0); //crea el td
  newCellTbody.textContent = formularioData.get("vendedor");

  newCellTbody = newFilaTbody.insertCell(1); //crea el td
  newCellTbody.textContent = formularioData.get("producto");

  newCellTbody = newFilaTbody.insertCell(2); //crea el td
  newCellTbody.textContent = formularioData.get("precio");

  newCellTbody = newFilaTbody.insertCell(3); //crea el td
  newCellTbody.textContent = formularioData.get("cantidad");
});