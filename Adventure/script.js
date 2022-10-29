document.getElementById("hamburguesa").onclick = function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

document.getElementsByClassName("closebtn")[0].onclick = function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};