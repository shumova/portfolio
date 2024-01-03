const media = window.matchMedia('(max-width: 639px)');

const sliderElements = document.querySelectorAll('[data-product-gallery]');
let sliders = [];

const destroySliders = () => {
  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    slider.destroy();
  });
  sliders = [];
};

const initSliders = () => {
  if (sliders.length) {
    return;
  }

  sliderElements.forEach((sliderElement) => {
    // eslint-disable-next-line no-undef
    const slider = new Swiper(sliderElement, {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        bulletElement: 'button',
        clickable: true,
      },
    });

    sliders.push(slider);
  });
};

const checkMedia = () => {
  if (media.matches) {
    initSliders();
  } else {
    destroySliders();
  }
};

const initGallerySlider = () => {
  if (sliderElements.length <= 0) {
    return;
  }

  if ('addEventListener' in media) {
    media.addEventListener('change', checkMedia);
  } else if ('addListener' in media) {
    media.addListener(checkMedia);
  }

  checkMedia();
};

export {initGallerySlider};
