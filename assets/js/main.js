$(document).ready(function () {
  $("#about").hide();

  $("#seemore a[href='#']").click(function () {
    $("#profile").fadeOut(1000);
    setTimeout(() => {
      $("#about").fadeIn();
    }, 1000);
    return false;
  });

  $("#back a[href='#']").click(function () {
    $("#about").fadeOut(1000);
    setTimeout(() => {
      $("#profile").fadeIn();
    }, 1000);
    return false;
  });
});