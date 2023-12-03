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

// owl carousel
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items:3,
      loop:true,
      margin:10,
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