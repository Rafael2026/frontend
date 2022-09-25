window.onload = function() {
  coche = document.getElementById("coche");
  setInterval(conducir, 50);
  setInterval(repetir, 2250);
}

function conducir() {
  desplazar += 10;
  coche.style.left = desplazar + "px";
}

function repetir() {
  coche.style.left = "0px";
  desplazar = 0;
}