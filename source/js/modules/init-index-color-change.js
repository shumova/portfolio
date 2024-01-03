import {locoScroll} from './locomotive-scroll/index';
import {getBodyScrollTop} from '../utils/get-body-scroll-top';

const header = document.querySelector('.header');
const indexIntro = document.querySelector('.page-intro');
const locoContainer = document.querySelector('[data-scroll-container]');

const setHeaderColor = (currentScroll, colorChangeHeight) => {
  // меняем цвет ссылок в шапке путем добавления или удаления класса
  if (currentScroll > colorChangeHeight) {
    header.classList.remove('header--light');
  } else {
    header.classList.add('header--light');
  }
};

const initIndexColorChange = () => {
  if (header && indexIntro && locoContainer) {

    locoScroll.on('scroll', function () {
      let currentScroll;
      if (locoContainer.style.transform === '') {
        // для мобилок
        currentScroll = getBodyScrollTop();
      } else {
        // для десктопов
        currentScroll = -Number(locoContainer.style.transform.split(',')[13]);
      }
      const colorChangeHeight = indexIntro.scrollHeight - /\d+/.exec(getComputedStyle(header).getPropertyValue('padding-top')) - 10;
      setHeaderColor(currentScroll, colorChangeHeight);
    });

  }
};

export {initIndexColorChange};
