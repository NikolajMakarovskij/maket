const swiper1 = new Swiper(".slider-header", {
  
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
 
const swiper2 = new Swiper(".slider-partners", {
  slidesPerView: 6,
        spaceBetween: 17,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
  

  
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});