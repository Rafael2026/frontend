var audio = document.getElementsByClassName("song")[0];
var bones = document.getElementsByClassName("esqueletos")[0];

document.getElementsByClassName("ventanaDerecha")[0].onclick = function mostrar() {
  bones.style.visibility = "visible";
};

document.getElementsByClassName("ventanaDerecha")[0].onclick = function sonar() {
  audio.play();
};

document.getElementsByClassName("esqueletos")[0].onclick = function pausar() {
  audio.pause();
};

document.getElementsByClassName("esqueletos")[0].onclick = function ocultar() {
  bones.style.visibility = "hidden";
};