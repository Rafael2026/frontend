var horaHTML = document.getElementById('hora');
var minutoHTML = document.getElementById('minuto');
var segundoHTML = document.getElementById('segundo');

function mostrarHora() {
  
  var fecha = new Date()
  var hora = fecha.getHours()
  var minuto = fecha.getMinutes()
  var segundo = fecha.getSeconds()

  horaHTML.textContent =  String(hora).padStart(2, "0")
  minutoHTML.textContent = String(minuto).padStart(2, "0")
  segundoHTML.textContent = String(segundo).padStart(2, "0")

  setTimeout(mostrarHora, 1000)
}

mostrarHora();