var theme = document.documentElement.getAttribute('data-bs-theme');
var form = document.getElementsByClassName("formulario");
var divForm = document.getElementById("myForm");
var buttonRegister = document.getElementsByClassName("register");
var selectedProduct = document.getElementsByClassName("product");

function validacion() {

  var valorCorreo = document.getElementById("correo").value;
  var valorContraseña = document.getElementById("passw").value;
  var condicion1 = true;
  var condicion2 = true;
  var mensajeError = "";

  if (valorCorreo == "") {
    condicion1 = false;
    mensajeError += "El campo correo está vacío\n";
  }

  if (valorContraseña == "") {
    condicion2 = false;
    mensajeError += "El campo contraseña está vacío\n";
  }

  if (!(condicion1 && condicion2)) {
    alert(mensajeError);
  }

  return condicionFinal;
};

form[0].onsubmit = function() {
  validacion();
};

divForm.onmouseover = function() {
  openForm();
};

divForm.onmouseout = function() {
  closeForm();
};

buttonRegister[0].onmouseover = function() {
  openForm();
};

function openForm() {
  divForm.style.display = "block";
  //document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  divForm.style.display = "none";
  //document.getElementById("myForm").style.display = "none";
}

document.getElementById('btnSwitch').onclick = function() {

  if (theme == 'dark') {
    document.documentElement.setAttribute('data-bs-theme','light');
  } else {
    document.documentElement.setAttribute('data-bs-theme','dark');
  }
};

for (var i = 0; i < selectedProduct.length; i++) {

  selectedProduct[i].onclick = function() {
    openForm();
  }
}