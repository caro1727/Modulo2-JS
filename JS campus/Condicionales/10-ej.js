// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses


let carrera = 3999;
let master = 2999;
let course = 4999;

let becaFacebook = 20;
let becaGoogle = 15;
let becaJesua = 50;

let descuentoCarreraFacebook = carrera - carrera * 0.2;
let descuentoCarreraGoogle = carrera - carrera * 0.15;
let descuentoCarreraJesua = carrera - carrera * 0.5;

let descuentoMasterFacebook = master - master * 0.2;
let descuentoMasterGoogle = master - master * 0.15;
let descuentoMasterJesua = master - master * 0.5;

let descuentoCourseFacebook = course - course * 0.2;
let descuentoCourseGoogle = course - course * 0.15;
let descuentoCourseJesua = course - course * 0.5;

let duracionCourse = 2;
let duracionMaster = 12;
let duracionCarrera = 6;

let programaEducativo = prompt("Elija el programa educativo a realizar --> Course - carrear - master : ").toLowerCase();

let beca = prompt("cuenta con alguna beca? Facebook - Google - Jesua").toLowerCase();

if (programaEducativo === "carrera" && beca === "facebook") {
    alert(descuentoCarreraFacebook * duracionCarrera);
} else if (programaEducativo === "carrera" && beca === "google") {
    alert(descuentoMasterGoogle * duracionCarrera);
} else if (programaEducativo === "carrera" && beca === "jesua") {
    alert(descuentoCourseJesua * duracionCarrera);
}

if (programaEducativo === "master" && beca === "facebook") {
    alert(descuentoMasterFacebook * duracionMaster);
} else if (programaEducativo === "master" && beca === "google") {
    alert(descuentoMasterGoogle * duracionMaster);
} else if (programaEducativo === "master" && beca === "jesua") {
    alert(descuentoMasterJesua * duracionMaster);
}

if (programaEducativo === "course" && beca === "facebook") {
    alert(descuentoCourseFacebook * duracionCourse);
} else if (programaEducativo === "course" && beca === "google") {
    alert(descuentoCourseGoogle * duracionCourse);
} else if (programaEducativo === "course" && beca === "jesua") {
    alert(descuentoCourseJesua * duracionCourse);
}