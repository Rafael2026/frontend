function myFunction() {

  var links = document.getElementsByClassName("links");
  
  if (links[0].style.display === "block") {
    links[0].style.display = "none";
  } else {
    links[0].style.display = "block";
  }
}