// Navbar
const menuBtn = document.getElementById("show"),
  closeBtn = document.getElementById("close"),
  mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileNav.style.right = "0";
})

closeBtn.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});


// owl carousel1
$(document).ready(function(){
  $('.carousel1').owlCarousel({
    items:3,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1024:{
        items:3
      }
    }
  })
});

// owl carousel2

$(document).ready(function(){
  $('.carousel2').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1024:{
          items:3
      }
    }
  })
});


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
