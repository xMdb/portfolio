$(document).ready(function () {

  // Hide other page on load
  $("#portfolio").hide();

  // Show other page on learn more click
  $("#learnMore a").click(function () {
    $("#profile").fadeOut(1000);
    setTimeout(() => {
      $("#portfolio").fadeIn();
    }, 1000);
    return false;
  });

  // Show profile on back arrow click
  $(".back").click(function () {
    $("#portfolio").fadeOut(1000);
    setTimeout(() => {
      $("#profile").fadeIn();
    }, 1000);
    return false;
  });

  $("#tabs a").click(function () {
    // Check for active
    $("#tabs li").removeClass("active");
    $(this).parent().addClass("active");
    // Display active tab
    const currentTab = $(this).attr("href");
    $("#tabsContent div").fadeOut(100);
    setTimeout(() => {
      $(currentTab).fadeIn();
    }, 100);

    return false;
  });

});