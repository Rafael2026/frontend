window.onload = function() {
  coche = document.getElementsByClassName("coche");
  setInterval(conducir, 50);
  setInterval(repetir, 2250);
}

function conducir() {
  desplazar += 10;
  coche[0].style.left = desplazar + "px";
}

function repetir() {
  coche[0].style.left = "0px";
  desplazar = 0;
}