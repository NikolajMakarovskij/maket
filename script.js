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
 
var swiper2 = new Swiper(".slider-partners", {

  setWrapperSize: true,
  width:1030,
  slidesPerView: 6,
  spaceBetween: 34,
  slidesPerGroup: 1,
  loop: true,


  

  
  speed: 1000,
  navigation: {
    nextEl: ".slider-partners-button-next",
    prevEl: ".slider-partners-button-prev",
    width: 1140,
  },

  mousewheel: true,
  keyboard: true,
});