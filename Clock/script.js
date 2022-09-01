var time = document.getElementsByClassName("time");

function showTime() {
  
  var fecha = new Date();

  var hora = fecha.getHours();
  var minuto = fecha.getMinutes();
  var segundo = fecha.getSeconds();

  time[0].innerHTML = String(hora).padStart(2, "0") + ":" + String(minuto).padStart(2, "0") + ":" + String(segundo).padStart(2, "0");

  setTimeout(showTime, 1000);
}

showTime();