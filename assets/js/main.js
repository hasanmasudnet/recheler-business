/*
  [JS Index]
*/


/*
  1. preloader

*/


$(function () {
  "use strict";

  // 1. mobile menu JS


  const navOpenBtn = document.getElementById('NavOpen')
  const navCloseBtn = document.getElementById('NavClose')

  console.log(navCloseBtn)

  navOpenBtn && navOpenBtn.addEventListener('click', () => {
    document.getElementById('mainNav').classList.add('mobil_nav__active');
  })

  navCloseBtn && navCloseBtn.addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('mobil_nav__active');
  })


  // 2. fullPage
  $("#fullpage").fullpage({
    anchors: ["home", "about", "services", "works", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["Home", "About", "Services", "Works", "Contact"],
    responsiveWidth: 995,
    autoScrolling: true,
    scrollBar: false,
    afterLoad: function (anchorLink, index) {
      if (index == 5) {
        $('.scroll-indicator').addClass('scroll-indicator-OFF');
      } else {
        $('.scroll-indicator').removeClass('scroll-indicator-OFF');
      }
    },
    afterResponsive: function (isResponsive) { }
  });




  /*blog slider one */
  var blogSlider = new Swiper('.blog__slider', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 0,
    loop: true,
    roundLengths: true,
    centeredSlides: false,
    autoplay: {
      delay: 15000
    },
    pagination: {
      el: ".blog-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.blog-next',
      prevEl: '.blog-prev',
    },
  });



  document.getElementById('Click').addEventListener('click', ()=>{
    console.log('working')
})
});