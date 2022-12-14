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
  var pressSlider = new Swiper('.press-slider', {
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
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
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

  /*Related Slide*/
  var relatedSlider = new Swiper('.related-slider', {
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 24,
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
      nextEl: '.related-next',
      prevEl: '.related-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 3
      }
    }
  });



  jQuery(window).on('load', function () {
    const tl = gsap.timeline({ defaults: { ease: "Elastic.easeOut(.8, 0.5)" } });
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
    tl.to(".hero__content", {
      y: 0,
      opacity: 1,
      ease: Power0.ease,
      duration: 1.5
    });
    



    // About
    gsap.registerPlugin(ScrollTrigger);

    const t5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_video__wrap",
            scrub: true,
            pin: true,
            start: "50% 50%",
            h: '100vh',
            duration: .5,
        }
    })

    .from(".orange", {
        scale: 0.6, 
        ease: Quint.easeIn,
        y: -100,
        duration: .5,
    })

    .from(".about_gif__wrap", {
        scaleY: 1,
        opacity: 1,
        ease:Power1.easeIn,
        transformOrigin:"left top",
        duration: .5,
    }, 0)
    .to(".about_gif__wrap", {
        scaleY:0,
        opacity: 0,
        ease:Power1.easeIn,
        transformOrigin:"left top",
        duration: .5,
    }, 0);

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


// gsap.to(".animi__wrap", {
//   scrollTrigger: {
//     trigger: ".blog__style",
//     scrub: 0.5,
//     start: "top bottom",
//     end: "bottom -300%",
//     ease: "power2"
//   },
//   y: "0%"
// });

  const imageRevel = gsap.timeline({ defaults: { ease: "power2" } });
  
  gsap.to(".porject_video__thumb img", {
    scrollTrigger: ".porject_video__thumb img", 
    scaleX: 1,
    delay : .6,
    ease: "power2",
    duration: 1.5,
  });
  gsap.to(".porject_video_thumb__two img", {
    scrollTrigger: ".porject_video_thumb__two img", 
    scaleX: 1,
    delay : .6,
    ease: "power2",
    duration: 1.5,
  });
  gsap.to(".project_video__overlay", {
    scrollTrigger: ".project_video__overlay", 
    scaleX: 1,
    x: 0,
    opacity: 1,
    delay : .6,
    ease: "power2",
    duration: 1.5,
  });
 
  gsap.to(".project_video_overlay__2", {
    scrollTrigger: ".project_video_overlay__2", 
    scaleX: 1,
    x: 0,
    opacity: 1,
    delay : .8,
    ease: "power2",
    duration: 1.5,
  });


  gsap.to(".counter__style", {
    scrollTrigger: ".counter__style", 
    y: 0,
    ease: "power2",
    duration: 1.5,
  });
  gsap.to(".press-slider", {
    scrollTrigger: ".press-slider", 
    y: 0,
    x: 0,
    ease: "power2",
    duration: 1.5,
  });
}(jQuery));



