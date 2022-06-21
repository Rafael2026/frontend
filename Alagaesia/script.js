document.getElementsByClassName("icon")[0].onclick = function myFunction() {
  
  var barraNav = document.getElementsByClassName("topnav")[0];
  
  if (barraNav.className == "topnav") {
    barraNav.className += " responsive";
  } else {
    barraNav.className = "topnav";
  }
};