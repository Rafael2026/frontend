var operacion;
var array;
var resultado = 0;
var numGuardado = 0;
const valorPantalla = document.getElementById("pantalla");
const botonesDisabled = document.getElementsByClassName("botonDisabled");
var cociente;

valorPantalla.innerHTML = 0;

document.getElementById("memoria").onclick = function() { memoria(); };
document.getElementById("borrar").onclick = function() { borrar(); };
document.getElementById("limpiar").onclick = function() { limpiar(); };
document.getElementById("reset").onclick = function() { resetear(); };
document.getElementById("random").onclick = function() { random(); };
document.getElementById("siete").onclick = function() { numero(7); };
document.getElementById("ocho").onclick = function() { numero(8); };
document.getElementById("nueve").onclick = function() { numero(9); };
document.getElementById("dividir").onclick = function() { dividir(); };
document.getElementById("e").onclick = function() { e(); };
document.getElementById("cuatro").onclick = function() { numero(4); };
document.getElementById("cinco").onclick = function() { numero(5); };
document.getElementById("seis").onclick = function() { numero(6); };
document.getElementById("multiplicar").onclick = function() { multiplicar(); };
document.getElementById("pi").onclick = function() { pi(); };
document.getElementById("uno").onclick = function() { numero(1); };
document.getElementById("dos").onclick = function() { numero(2); };
document.getElementById("tres").onclick = function() { numero(3); };
document.getElementById("restar").onclick = function() { restar(); };
document.getElementById("factor").onclick = function() { factorial(); };
document.getElementById("simbolo").onclick = function() { cambiarSimbolo(); };
document.getElementById("cero").onclick = function() { cero(); };
document.getElementById("decimal").onclick = function() { decimal(); };
document.getElementById("sumar").onclick = function() { sumar(); };
document.getElementById("mod").onclick = function() { modulo(); };
document.getElementById("inversa").onclick = function() { inversa(); };
document.getElementById("raiz").onclick = function() { raizCuadrada(); };
document.getElementById("porcentaje").onclick = function() { porcentaje(); };
document.getElementById("igual").onclick = function() { igual(); };

function memoria() {
  numGuardado = resultado;
  valorPantalla.innerHTML = numGuardado;
}

function borrar() {
  valorPantalla.innerHTML = parseInt(valorPantalla.innerHTML/10);
}

function limpiar() {

  valorPantalla.innerHTML = 0;

  for (let i = 0; i < botonesDisabled.length; i++) {
    botonesDisabled[i].style.opacity = 1;
  }
}

function resetear() {
  memoria();
  limpiar();
}

function random() {

  if (valorPantalla.innerHTML != "0") {
    valorPantalla.innerHTML += (Math.random() * 10);
  } else {
    valorPantalla.innerHTML = (Math.random() * 10);
  }
}

function numero(num) {

  if (valorPantalla.innerHTML != "0") {
    valorPantalla.innerHTML += num;
  } else {
    valorPantalla.innerHTML = num;
  }
}

function dividir() {
  valorPantalla.innerHTML += " / ";
  operacion = "/";
  document.getElementById("decimal").style.opacity = 1;
}

function e() {

  if (valorPantalla.innerHTML != "0") {
    valorPantalla.innerHTML += (Math.E);
  } else {
    valorPantalla.innerHTML = (Math.E);
  }
}

function multiplicar() {
  valorPantalla.innerHTML += " * ";
  operacion = "*";
  document.getElementById("decimal").style.opacity = 1;
}

function pi() {

  if (valorPantalla.innerHTML != "0") {
    valorPantalla.innerHTML += (Math.PI);
  } else {
    valorPantalla.innerHTML = (Math.PI);
  }
}

function restar() {
  valorPantalla.innerHTML += " - ";
  operacion = "-";
  document.getElementById("decimal").style.opacity = 1;
}

function factorial() {
  valorPantalla.innerHTML += "!";
}

function cambiarSimbolo() {
  valorPantalla.innerHTML = (valorPantalla.innerHTML * (-1));
}

function cero() {

  if (valorPantalla.innerHTML != "0") {
    valorPantalla.innerHTML += 0;
  }
}

function decimal() {
  valorPantalla.innerHTML += ".";
  document.getElementById("decimal").disabled = true;
  document.getElementById("decimal").style.opacity = 0.5;
}

function sumar() {
  valorPantalla.innerHTML += " + ";
  operacion = "+";
  document.getElementById("decimal").style.opacity = 1;
}

function modulo() {
  valorPantalla.innerHTML += " MOD ";
  operacion = "MOD";
  document.getElementById("decimal").style.opacity = 1;
}

function inversa() {

  if (valorPantalla.innerHTML == 0) {

    valorPantalla.innerHTML = (1/valorPantalla.innerHTML);
    botonesDisabled.disabled = true;

    for (let i = 0; i < botonesDisabled.length; i++) {
      botonesDisabled[i].style.opacity = 0.5;
    }

  } else {
    valorPantalla.innerHTML = (1/valorPantalla.innerHTML);
  }
}

function raizCuadrada() {
  valorPantalla.innerHTML = Math.sqrt(valorPantalla.innerHTML);
}

function porcentaje() {
  valorPantalla.innerHTML += "%";
  valorPantalla.innerHTML = (parseFloat(valorPantalla.innerHTML)/100);
  document.getElementById("decimal").style.opacity = 1;
}

function igual() {

  if (operacion == "+") {

    array = valorPantalla.innerHTML.split(" + ");

    for (let i = 0; i < array.length; i++) {
      resultado += parseFloat(array[i]);
    }

  } else if (operacion == "-") {

    array = valorPantalla.innerHTML.split(" - ");
    resultado = parseFloat(array[0]);

    for (let i = 1; i < array.length; i++) {
      resultado -= parseFloat(array[i]);
    }

  } else if (operacion == "*") {

    array = valorPantalla.innerHTML.split(" * ");
    resultado = parseFloat(array[0]);

    for (let i = 1; i < array.length; i++) {
      resultado *= parseFloat(array[i]);
    }

  } else if (operacion == "/") {

    array = valorPantalla.innerHTML.split(" / ");
    resultado = parseFloat(array[0]);

    for (let i = 1; i < array.length; i++) {
      resultado /= parseFloat(array[i]);
    }

  } else if (operacion == "MOD") {
    array = valorPantalla.innerHTML.split(" MOD ");
    cociente = parseFloat(array[0]/array[1]);
    resultado = (array[0] - (array[1] * cociente));
  }

  valorPantalla.innerHTML += (" = " + resultado);
  console.log(valorPantalla.innerHTML);
  numGuardado = resultado;
  resetear();
}