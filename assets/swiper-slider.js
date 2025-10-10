console.log("Swiper is:", typeof Swiper);

/* global Swiper */

document.addEventListener("DOMContentLoaded", function () {
  // Select all sliders on the page
  document.querySelectorAll(".mySwiper").forEach((swiperEl) => {
    // Get Liquid data attributes
    const loop = swiperEl.dataset.loop === "true"; // true or false
    const autoplayEnabled = swiperEl.dataset.autoplay === "true"; // true or false
    const autoplaydelay = parseInt(swiperEl.dataset.speed, 10) || 5000; // fallback 5000ms
    const animationspeed = 1000; // fallback 1000ms

    // Initialize Swiper
    new Swiper(swiperEl, {
      loop: loop,
      speed: animationspeed,
      autoplay: autoplayEnabled
        ? {
            delay: autoplaydelay,
            disableOnInteraction: false,
          }
        : false,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });
});
