/*
  [JS Index]
*/


/*
  1. preloader

*/


(function ($) {
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


  /*Press Slide*/
  var blogSlider = new Swiper('.press-slider', {
    slidesPerView: 2.2,
    speed: 500,
    spaceBetween: 30,
    loop: true,
    roundLengths: true,
    centeredSlides: false,
    autoplay: {
      delay: 15000
    },
    pagination: {
      el: "",
      clickable: true
    },
    navigation: {
      nextEl: '.press-next',
      prevEl: '.press-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 2.2,
        spaceBetween: 30
      },
      1400: {
        slidesPerView: 2.2,
        spaceBetween: 40
      }
    }
  });



  jQuery(window).on('load', function () {
    const tl = gsap.timeline({ defaults: { ease: "Elastic.easeOut(1, 0.5" } });
    tl.to(".clip__texts", {
      x: "0",
      duration: 1.5,
      opacity: 1,
    });
    tl.to(".bottom__text", {
      x: "0",
      duration: 1.5,
      opacity: 1,
    });
    tl.to(".clip__normal, .bottom_text__start", {
      duration: 1.5,
      opacity: 0,
    });
    tl.to(".preloader-wrap", {
      duration: 2,
      opacity: 0,
      scale: 5,
      zIndex: -10,
      ease: Power0.ease
    });
  });

  // Footer slider
gsap.registerPlugin(ScrollTrigger);    
let t2 = gsap.timeline();
    t2.to('.scrollingTextTwo', {
    xPercent:15,
    duration: 1,
    scrollTrigger:{

        trigger:".scrollingTextTwo",
        scrub:1
    }
})
let t3 = gsap.timeline();
    t3.to('.scrollingTextOne', {
    x: 50,
    xPercent:-15,
    scrollTrigger:{

        trigger:".scrollingTextOne",
        scrub:1
    }
})

var wheel = $("#wheel").flipster({
  style: 'wheel',
  spacing: 0,
  buttons: true,
  scrollwheel: false,
  loop: false,
  infinity:true,
  start: 'center',
}); 


}(jQuery));


