import { robots } from "./robots.js";

let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");

let contenedor = document.getElementById("contenedor");

let imagen1 = document.getElementById("imagen1");
let nombre1 = document.getElementById("nombre1");
let serie1 = document.getElementById("serie1");

let robot = "";



console.log(typeof(id));

imagen.setAttribute("src", robots[0].avatar);
nombre.innerHTML = robots[0].name;

imagen1.setAttribute("src", robots[1].avatar);
nombre1.innerHTML = robots[1].name;
serie1.innerHTML = robots[1].series;

imagen2.setAttribute("src", robots[2].avatar);
nombre2.innerHTML = robots[2].name;
serie2.innerHTML = robots[2].series;


console.log(robots)


