import { robots } from "./robots.js";

let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");

let contenedor = document.getElementById("contenedor");

let imagen1 = document.getElementById("imagen1");
let nombre1 = document.getElementById("nombre1");
let serie1 = document.getElementById("serie1");

let robot = "";

const { series , id , name , weapon , avatar} = robots[0];

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

const getRobotById = (id = "009") => {
    return robots.find((robot) => {
        return robot.id === id;
    });
}

const getRobotBySeries = (series = 2) => {
    return robots.filter((robot) => {
        return robot.series === series;
    });
};

const getRobots = robots.map((robot) => {
    let tarjeta = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${robot.name}</h5>
                <img src="${robot.avatar}">
            </div>
        </div>
    `;

    return contenedor.innerHTML = tarjeta;    
});

getRobots();

//contenedor.innerHTML = getRobots.join("");


for(robot of robots){
    console.log("----"+robot)
}

console.log(getRobotById("033"));

console.log(getRobotBySeries(2));

