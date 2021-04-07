new Swiper('.swiper-container',{
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        
        },
})
var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: { 
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
  });
  var swiper = new Swiper('.why-modus', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var swiper = new Swiper('.jquery-slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',

    autoplay: { 
      delay: 3800,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      
      },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });