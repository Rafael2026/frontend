'use strict';

var i = 0;
var valores = [];

function saveStorage(nombre, correo, salario, ciudad) {

  addElement(nombre, correo, salario, ciudad);

  localStorage.setItem("valores", JSON.stringify(valores));
  valores = JSON.parse(localStorage.getItem("valores"));

  addStorageTable(valores);
}

function saveCookie(nombre, correo, salario, ciudad) {

  addElement(nombre, correo, salario, ciudad);

  document.cookie = "valores=" + JSON.stringify(valores) + ";";
  valores = JSON.parse(getCookie("valores"));

  addCookieTable(valores);
}

function delStorage(indice) {

  var rows = document.getElementById("tabla").rows;
  var nombreRepetido = false;
  let i = 1;

  while (!nombreRepetido && i < (indice + 1)) {

    var nombre = rows[i].getElementsByTagName("td")[1].innerHTML;
    var nombreIntroducido = rows[rows.length - 1].getElementsByTagName("td")[1].innerHTML;

    if (nombre.toLowerCase() == nombreIntroducido.toLowerCase()) {
      nombreRepetido = true;
    }

    i++;
  }

  if (nombreRepetido) {

    if (confirm("¿Seguro que quieres borrar este usuario?")) {
      valores.splice(indice, 1);

      localStorage.setItem("valores", JSON.stringify(valores));
      valores = JSON.parse(localStorage.getItem("valores"));

      document.getElementById("cuerpo").deleteRow(indice);
    }

  } else {
    valores.splice(indice, 1);

    localStorage.setItem("valores", JSON.stringify(valores));
    valores = JSON.parse(localStorage.getItem("valores"));

    document.getElementById("cuerpo").deleteRow(indice);
  }
}

function delCookie(indice) {

  var rows = document.getElementById("tabla").rows;
  var nombreRepetido = false;
  let i = 1;

  while (!nombreRepetido && i < (indice + 1)) {

    var nombre = rows[i].getElementsByTagName("td")[1].innerHTML;
    var nombreIntroducido = rows[rows.length - 1].getElementsByTagName("td")[1].innerHTML;

    if (nombre.toLowerCase() == nombreIntroducido.toLowerCase()) {
      nombreRepetido = true;
    }

    i++;
  }

  if (findRepeatedName()) {

    if (confirm("¿Seguro que quieres borrar este usuario?")) {
      valores.splice(indice, 1);

      document.cookie = "valores=" + JSON.stringify(valores) + ";";
      valores = JSON.parse(getCookie("valores"));

      document.getElementById("cuerpo").deleteRow(indice);
    }

  } else {
    valores.splice(indice, 1);

    document.cookie = "valores=" + JSON.stringify(valores) + ";";
    valores = JSON.parse(getCookie("valores"));

    document.getElementById("cuerpo").deleteRow(indice);
  }
}

function editStorage(indice) {

  document.getElementById("textoFormulario").innerHTML = "Editar empleado";
  document.getElementById("nombre").value = valores[indice].nombre;
  document.getElementById("correo").value = valores[indice].correo;
  document.getElementById("salario").value = valores[indice].salario;
  document.getElementById("ciudad").value = valores[indice].ciudad;

  document.getElementById("guardar").onclick = function() {

    var celdas = document.getElementById("cuerpo").rows[indice - 1].cells;

    valores[indice].nombre = document.getElementById("nombre").value;
    valores[indice].correo = document.getElementById("correo").value;
    valores[indice].salario = document.getElementById("salario").value;
    valores[indice].ciudad = document.getElementById("ciudad").value;

    changeCells(celdas, indice, valores[indice].nombre, valores[indice].correo, valores[indice].salario, valores[indice].ciudad);

    localStorage.setItem("valores", JSON.stringify(valores));
    valores = JSON.parse(localStorage.getItem("valores"));
  };
}

function editCookie(indice) {

  document.getElementById("textoFormulario").innerHTML = "Editar empleado";
  document.getElementById("nombre").value = valores[indice].nombre;
  document.getElementById("correo").value = valores[indice].correo;
  document.getElementById("salario").value = valores[indice].salario;
  document.getElementById("ciudad").value = valores[indice].ciudad;

  document.getElementById("guardar").onclick = function() {

    var celdas = document.getElementById("cuerpo").rows[indice - 1].cells;

    valores[indice].nombre = document.getElementById("nombre").value;
    valores[indice].correo = document.getElementById("correo").value;
    valores[indice].salario = document.getElementById("salario").value;
    valores[indice].ciudad = document.getElementById("ciudad").value;

    changeCells(celdas, indice, valores[indice].nombre, valores[indice].correo, valores[indice].salario, valores[indice].ciudad);

    document.cookie = "valores=" + JSON.stringify(valores) + ";";
    valores = JSON.parse(getCookie("valores"));
  };
}

function getCookie(nombre) {

  let name = nombre + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {

    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

window.onload = function() {

  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  var salario = document.getElementById("salario");
  var ciudad = document.getElementById("ciudad");

  if (document.getElementById("radio1").checked) {

    if (localStorage.length >= 1) {

      valores = JSON.parse(localStorage.getItem("valores"));

      while (i < valores.length) {
        addStorageTable(valores);
        i++;
      }

      document.getElementById("guardar").onclick = function() {
        saveStorage(nombre.value, correo.value, salario.value, ciudad.value);
      };

      localStorage.setItem("valores", JSON.stringify(valores));

    } else {

      valores = [
        {nombre: "Manuelita", correo: "manlit@gmail.com", salario: 650, ciudad: "Malaga"},
        {nombre: "Ale", correo: "al@gmail.com", salario: 1200, ciudad: "Elche"},
        {nombre: "Magic", correo: "mag@gmail.com", salario: 780, ciudad: "Galicia"}
      ];

      localStorage.setItem("valores", JSON.stringify(valores));
    }

    valores = JSON.parse(localStorage.getItem("valores"));

  } else if (document.getElementById("radio2").checked) {

    if (valores.length >= 1) {

      while (i < valores.length) {
        addCookieTable(valores);
        i++;
      }

      document.getElementById("guardar").onclick = function() {
        saveCookie(nombre.value, correo.value, salario.value, ciudad.value);
      };

      document.cookie = "valores=" + JSON.stringify(valores) + ";";

    } else {

      valores = [
        {nombre: "Manuelita", correo: "manlit@gmail.com", salario: 650, ciudad: "Malaga"},
        {nombre: "Ale", correo: "al@gmail.com", salario: 1200, ciudad: "Elche"},
        {nombre: "Magic", correo: "mag@gmail.com", salario: 780, ciudad: "Galicia"}
      ];

      document.cookie = "valores=" + JSON.stringify(valores) + ";";
      valores = JSON.parse(getCookie("valores"));

      while (i < valores.length) {
        addCookieTable(valores);
        i++;
      }
    }
  }

  valores = JSON.parse(getCookie("valores"));

  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("salario").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("textoFormulario").textContent = "Agregar empleado";
};

function addElement(nombre, correo, salario, ciudad) {
  valores.push({nombre: nombre, correo: correo, salario: salario, ciudad: ciudad});
}

function changeCells(celdas, indice, nombre, correo, salario, ciudad) {
  celdas[0].textContent = (indice + 1);
  celdas[1].textContent = nombre;
  celdas[2].textContent = correo;
  celdas[3].textContent = salario;
  celdas[4].textContent = ciudad;
}

function addStorageTable(valores) {

  document.getElementById("cuerpo").innerHTML += "<tr>" +
    "<td>" + (i + 1) + "</td>" +
    "<td>" + valores[i].nombre + "</td>" +
    "<td>" + valores[i].correo + "</td>" +
    "<td>" + valores[i].salario + "</td>" +
    "<td>" + valores[i].ciudad + "</td>" +
    "<td><button class='btn btn-warning' onclick='editStorage(" + i + ")'>Editar</button></td>" +
    "<td><button class='btn btn-danger' onclick='delStorage(" + i + ")'>Borrar</button></td>" +
  "</tr>";
}

function addCookieTable(valores) {

  document.getElementById("cuerpo").innerHTML += "<tr>" +
    "<td>" + (i + 1) + "</td>" +
    "<td>" + valores[i].nombre + "</td>" +
    "<td>" + valores[i].correo + "</td>" +
    "<td>" + valores[i].salario + "</td>" +
    "<td>" + valores[i].ciudad + "</td>" +
    "<td><button class='btn btn-warning' onclick='editCookie(" + i + ")'>Editar</button></td>" +
    "<td><button class='btn btn-danger' onclick='delCookie(" + i + ")'>Borrar</button></td>" +
  "</tr>";
}