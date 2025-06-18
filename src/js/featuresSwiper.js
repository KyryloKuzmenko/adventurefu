import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let featuresSwiper = null;

function initFeaturesSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !featuresSwiper) {
    featuresSwiper = new Swiper('.features-swiper', {
      spaceBetween: 50,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      loop: true,

      navigation: {
        nextEl: '.features-button-next',
        prevEl: '.features-button-prev',
      },
      pagination: {
        el: '.features-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }
}

window.addEventListener('load', initFeaturesSwiper);
window.addEventListener('resize', initFeaturesSwiper);
