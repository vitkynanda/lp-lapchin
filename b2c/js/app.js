var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },

  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    20: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    920: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
