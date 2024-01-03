import {a11y} from '../constants';

const initPageIntro = () => {
  const pageIntro = document.querySelector('[data-page-intro]');

  if (!pageIntro) {
    return;
  }

  const pageIntroSettings = {
    delayValue: pageIntro.dataset.delay || 4500,
    speedValue: pageIntro.dataset.speed || 1800,
  };

  const pageIntroSlider = pageIntro.querySelector('[data-page-intro-slider]');
  const pageIntroPagination = pageIntro.querySelector('[data-page-intro-pagination]');

  const initPageIntroSlider = () => new window.Swiper(pageIntroSlider, {
    slidesPerView: 1,
    speed: Number(pageIntroSettings.speedValue),
    allowTouchMove: false,
    loop: false,
    autoplay: {
      delay: Number(pageIntroSettings.delayValue),
      disableOnInteraction: false,
    },

    a11y,

    pagination: {
      el: pageIntroPagination,
      type: 'fraction',
      formatFractionCurrent: (number) => `0${number}`.slice(-2),
      formatFractionTotal: (number) => `0${number}`.slice(-2),
    },
  });

  initPageIntroSlider();
};

export {initPageIntro};
