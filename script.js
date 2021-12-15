var swiper = new Swiper(".slider-header", {
  
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  speed: 1000,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});