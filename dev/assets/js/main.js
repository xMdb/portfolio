// Smooth Scrolling
$('nav, header, nav ul li a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50
      },
      800
    );
  }
});

// Loader
$(window).on("load", function () {
  $(".loaderContainer").fadeOut("slow");
});