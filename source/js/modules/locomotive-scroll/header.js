import {locoScroll} from './index';
import {getBodyScrollTop} from '../../utils/get-body-scroll-top';

// Условие (breakpoint.matches && getBodyScrollTop() < 60) необходимо для айфонов,
// у них при прокрутке вверх меню иногда пропадает из-за появления адресной строки в браузере(?)

const initLocoHeader = () => {
  const header = document.querySelector('.header');

  if (header) {
    const breakpoint = window.matchMedia('(max-width: 767px)');

    locoScroll.on('scroll', function (scroll) {
      if ((breakpoint.matches && scroll.speed && scroll.speed < 0) ||
        (breakpoint.matches && getBodyScrollTop() < 60) ||
        (!breakpoint.matches)) {
        header.classList.remove('is-hidden');
      } else if (breakpoint.matches && scroll.speed && scroll.speed > 0.3) {
        header.classList.add('is-hidden');
      }
    });
  }
};

export {initLocoHeader};
