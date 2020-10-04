var slideTimeout;

$("#fullpage").fullpage({
  navigation: true,
  responsiveWidth: 700,
  anchors: ["welcome", "works", "contact"],
  parallax: true,
  scrollOverflow: true,
  slidesNavigation: true,
  css3: true,
  afterRender: function () {
    //on page load, start the slideshow
    slideTimeout = setInterval(function () {
      $.fn.fullpage.moveSlideRight();
    }, 7000);
  },

  onLeave: function (index, direction) {
    //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
    if (index == "1") {
      console.log("on leaving the slideshow/section1");
      clearInterval(slideTimeout);
    }
  },
});
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

$(".main-gallery").flickity({
  // options
  cellAlign: "left",
  contain: true,
});

function redwolf() {
  document.getElementById("redwolf").classList.toggle("show");
}

$("#redwolf").on("click", function () {
  $(this).toggle("show");
});
