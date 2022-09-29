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

  if (!(condicion1 && condicion2)) { alert(mensajeError); }

  return condicionFinal;
}

function openForm() { document.getElementById("myForm").style.display = "block"; }

function closeForm() { document.getElementById("myForm").style.display = "none"; }