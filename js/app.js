new fullpage("#fullpage", {
  navigation: true,
  responsiveWidth: 700,
  anchors: ["welcome", "works", "contact"],
  parallax: true,
  scrollOverflow: true,
  slidesNavigation: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
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
