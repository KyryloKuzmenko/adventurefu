import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gallerySwiper = null;

function initGallerySwiper() {
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      spaceBetween: 50,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        1200: {
          spaceBetween: 200,
        }
      },

      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },
      pagination: {
        el: '.gallery-pagination',
        clickable: true,
      },
    });
  }
}

window.addEventListener('load', initGallerySwiper);
