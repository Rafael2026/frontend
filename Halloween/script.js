/* DECLARACIÓN DE FUNCIONES */
function mostrar() {
  el = document.getElementById("esqueletos");
  el.style.visibility = "visible";
}

function ocultar() {
  el = document.getElementById("esqueletos");
  el.style.visibility = "hidden";
}

function sonar() {
  var audio = document.getElementById("song");
  audio.play();
}

function pausar() {
  var audio = document.getElementById("song");
  audio.pause();
}