var i = 0;
var galeria = document.getElementsByClassName("gallery");
var imagenes = document.getElementsByTagName("img");
var botones = document.getElementsByClassName("botones");

function cambiarImagen() {
  galeria[i].style.display = "none";
  i = (i + 1)%galeria.length;
  galeria[i].style.display = "block";
}

function izqDer() {

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].className = "img1";
    imagenes[j].style.transform = "scale(1)";
  }
}

function derIzq() {

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].className = "img2";
    imagenes[j].style.transform = "scale(1)";
  }
}

function arrAba() {

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].className = "img3";
    imagenes[j].style.transform = "scale(1)";
  }
}

function abaArr() {

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].className = "img4";
    imagenes[j].style.transform = "scale(1)";
  }
}

function transp() {

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].className = "img5";
    imagenes[j].style.transform = "scale(1)";
  }
}

function peqGra() {

  for (let j = 0; j < imagenes.length; j++) { imagenes[j].className = "img6"; }
}

function graPeq() {

  for (let j = 0; j < imagenes.length; j++) { imagenes[j].className = "img7"; }
}

setInterval(cambiarImagen, 2010);