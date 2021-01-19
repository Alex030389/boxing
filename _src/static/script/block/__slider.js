//////////////////////////////////////////// data-slider="1"
$('[data-slider="1"]').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  accessibility: false,
  touchThreshold: 10,
  swipeToSlide: true,
});

$('.testimonials__btn--prev').on('click', function() {
  $('[data-slider="1"]').slick('slickPrev');
});

$('.testimonials__btn--next').on('click', function() {
  $('[data-slider="1"]').slick('slickNext');
});