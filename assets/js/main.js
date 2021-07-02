$(document).ready(function () {

  // Hide other page on load
  $("#portfolio").hide();

  // Show other page on learn more click
  $("#learnmore a").click(function () {
    $("#profile").fadeOut(1000);
    setTimeout(() => {
      $("#portfolio").fadeIn();
    }, 1000);
    return false;
  });

  // Show profile on back arrow click
  $("#back").click(function () {
    $("#portfolio").fadeOut(1000);
    setTimeout(() => {
      $("#profile").fadeIn();
    }, 1000);
    return false;
  });

  $(function () {
    $("#tabs").tabs();
  });

  $('#tabs').tabs({
    create: function() {
        var widget = $(this).data('tabs');
        $(window).on('hashchange', function() {
            widget.option('active', widget._getIndex(location.hash));
        });
    }
});

});