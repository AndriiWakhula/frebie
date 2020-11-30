$('.hero__slider').slick({
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: false,
  asNavFor: '.hero__slider-dots',
});

$('.hero__slider-dots').slick({
  slidesToShow: 3,
  arrows: false,
  focusOnSelect: true,
  asNavFor: '.hero__slider',
});



let reviewsSwiper = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

let mixer = mixitup('.works__items');


