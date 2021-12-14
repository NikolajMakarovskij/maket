  // core version + navigation, pagination modules:
  import {Swiper, Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // configure Swiper to use modules
  Swiper.use([Navigation, Pagination]);

  // init Swiper:
  const swiper_head = new Swiper('.swiper_head', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });