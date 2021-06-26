$(document).ready(function () {
  $("#about").hide();
  
  $("#seemore a").click(function () {
    $("#profile").fadeOut(1000);
    setTimeout(() => {
      $("#about").fadeIn();
    }, 1000);
  });

  $("#back a").click(function () {
    $("#about").fadeOut(1000);
    setTimeout(() => {
      $("#profile").fadeIn();
    }, 1000);
  });
});