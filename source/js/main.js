import {iosVhFix} from './utils/ios-vh-fix';
import {initPageIntro} from './modules/init-page-intro';
import {initHeaderHeight} from './modules/init-header-height';
import {staticVh} from './utils/static-vh';
import {initAccordions} from './modules/accordion/init-accordion';
import {initLocoScroll} from './modules/locomotive-scroll';
import {initScrollAnimation} from './modules/animation/scroll-animation';
import {initPreloader} from './modules/init-preloader';
import {iosInputScaleFix} from './utils/ios-input-scale-fix';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  staticVh();
  iosInputScaleFix();

  // Modules
  // ---------------------------------

  initLocoScroll();
  initPreloader();
  initPageIntro();
  initHeaderHeight();
  initAccordions();
  initScrollAnimation();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
