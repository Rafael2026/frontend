$(".icon")[0].click = function() {
  
  var barraNav = $(".topnav")[0];
  
  if (barraNav.className == "topnav") {
    barraNav.className += " responsive";
  } else {
    barraNav.className = "topnav";
  }
};
