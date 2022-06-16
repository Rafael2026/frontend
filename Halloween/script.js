window.onload = function() {
  
  var audio = document.getElementById("song");
  var el = document.getElementById("esqueletos");
  
  function mostrar() { el.style.visibility = "visible"; }

  function ocultar() { el.style.visibility = "hidden"; }

  function sonar() { audio.play(); }

  function pausar() { audio.pause(); }
};
