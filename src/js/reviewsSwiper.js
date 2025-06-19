import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let reviewsSwiper = null;

function initReviewsSwiper() {
  if (!reviewsSwiper) {
    gallerySwiper = new Swiper('.reviews-swiper', {
      spaceBetween: 100,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 30,
        },
      },

      navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
    });
  }
}

window.addEventListener('load', initReviewsSwiper);
