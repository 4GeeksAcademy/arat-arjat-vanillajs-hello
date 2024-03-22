/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// aqui necesito obtener el elemtneto por su ID
let id = document.getElementById("excuse");

//aqui necesito crear tres arreglo para cada parte de la excusa LeT

let quien = ["el perro", "mi loro", "mi gato", "mi hanster"];
let accion = ["se comio", "orino", "babeo", "lamio"];
let que = ["el desayuno", "el telefono", "a los bomberos", "el auto"];
let donde = ["ayer", "hoy", "al medio dia"];

function excusas() {
  let indexQuien = Math.floor(Math.random() * quien.length);
  let indexAccion = Math.floor(Math.random() * accion.length);
  let indexQue = Math.floor(Math.random() * que.length);
  let indexDonde = Math.floor(Math.random() * donde.length);
  console.log(quien[indexQuien]);
  console.log(accion[indexAccion]);
  console.log(que[indexQue]);
  console.log(donde[indexDonde]);

  id.innerText =
    quien[indexQuien] +
    " " +
    accion[indexAccion] +
    " " +
    que[indexQue] +
    " " +
    donde[indexDonde];
}

window.onload = function() {
  //write your code here

  console.log("excuseid", { id });
  console.log(excusas());
};
