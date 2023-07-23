var desplazar = 0;

/*window.onload = function() {

  const coche = document.getElementsByClassName("coche");
  
  setInterval(function conducir() {
    desplazar += 10;
    coche[0].style.left = desplazar + "px";
  }, 50);

  setInterval(function repetir() {
    coche[0].style.left = "0px";
    desplazar = 0;
  }, 2250);
};*/

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