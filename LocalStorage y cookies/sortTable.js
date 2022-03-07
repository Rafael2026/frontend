function sortTable(n) {

  var rows = document.getElementById("tabla").rows;
  var switching = true;
  var i;
  var x;
  var y;
  var shouldSwitch;
  var dir = "asc";
  var switchcount = 0;
  var valor1;
  var valor2;

  while (switching) {

    switching = false;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n].innerHTML;
      y = rows[i + 1].getElementsByTagName("td")[n].innerHTML;

      valor1 = isNumber(x);
      valor2 = isNumber(y);

      if (dir == "asc") {

        if (valor1 > valor2) {
          shouldSwitch = true;
          break;
        }

      } else if (dir == "desc") {

        if (valor1 < valor2) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function isNumber(valor) {

  var valorActualizado;

  if (isNaN(parseInt(valor))) {
    valorActualizado = valor.toLowerCase();
  } else {
    valorActualizado = parseInt(valor);
  }

  return valorActualizado;
}