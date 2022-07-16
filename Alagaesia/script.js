$(".icon")[0].click = function() {
  
  var barraNav = $(".topnav")[0];
  
  if (barraNav.attr("class") == "topnav") {
    barraNav.addClass(" responsive");
  } else {
    barraNav.attr("class") = "topnav";
  }
};
