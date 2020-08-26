// Smooth Scrolling
$('nav, header, nav ul li a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 0
      },
      800
    );
  }
});

$("a[href='#']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Loader
$(window).on("load", function () {
  $(".loaderContainer").fadeOut("slow");
});