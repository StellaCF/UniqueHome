const menuBtn = document.getElementById("show"),
  closeBtn = document.getElementById("close"),
  mobileNav = document.getElementById("mobile-nav");

  menuBtn.addEventListener("click", () => {
    mobileNav.style.right = "0";
  })

  closeBtn.addEventListener("click", () => {
    mobileNav.style.right = "-100%";
  })

  // owl carousel3
  $(document).ready(function(){
    $('.carousel3').owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
      })
    })
