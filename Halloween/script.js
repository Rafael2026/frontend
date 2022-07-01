var audio = document.getElementsByClassName("song");
var bones = document.getElementsByClassName("esqueletos");
var ventana = document.getElementsByClassName("ventanaDerecha");

ventana[0].onclick = function() {
  bones[0].style.visibility = "visible";
  audio[0].play();
};

bones[0].onclick = function() {
  bones[0].style.visibility = "hidden";
  audio[0].pause();
};
