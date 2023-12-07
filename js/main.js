const menuBtn = document.getElementById("show"),
  closeBtn = document.getElementById("close"),
  mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileNav.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});

// owl carousel3

// $(".carousel3").owlCarousel({
//   loop: true,
//   margin: 10,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });


// swiperjs
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
