import {FocusLock} from '../utils/focus-lock';
import {disablePageScroll, enablePageScroll} from '../vendor/scroll-lock';

const focusLock = new FocusLock();

const header = document.querySelector('.header');
const mainNav = header ? header.querySelector('.main-nav') : null;
const mainNavBtn = mainNav ? mainNav.querySelector('[data-nav-toggle]') : null;
const mainNavList = mainNav ? mainNav.querySelector('.main-nav__list') : null;
const linksArray = mainNav ? Array.from(mainNav.querySelectorAll('.main-nav__list a')) : null;
// const mainNavTopBg = mainNav ? mainNav.querySelector('.main-nav__top-bg') : null;
const breakpoint = window.matchMedia('(max-width: 767px)');

const openMenu = () => {
  if (!header.classList.contains('is-opened')) {
    mainNavBtn.setAttribute('aria-label', 'Закрыть меню');
    mainNavBtn.setAttribute('aria-pressed', 'true');
    header.classList.add('is-opened');
    mainNav.classList.add('is-opened');
    mainNav.classList.add('is-visible');
    linksArray.forEach((item) => item.removeAttribute('tabindex'));

    document.addEventListener('keydown', onDocumentKeydown);
    focusLock.lock('.main-nav');
    disablePageScroll(mainNav);
  }
};

const closeMenu = () => {
  if (header.classList.contains('is-opened')) {
    mainNavBtn.setAttribute('aria-label', 'Открыть меню');
    mainNavBtn.setAttribute('aria-pressed', 'false');
    header.classList.remove('is-opened');
    linksArray.forEach((item) => item.setAttribute('tabindex', '-1'));
    mainNav.classList.remove('is-visible');
    setTimeout(() => {
      mainNav.classList.remove('is-opened');
    }, 300);

    document.removeEventListener('keydown', onDocumentKeydown);
    focusLock.unlock();
    enablePageScroll(mainNav);
  }
};

const onDocumentClick = (evt) => {
  // клик за пределами меню
  if (!evt.target.closest('.main-nav')) {
    closeMenu();
  }
  // кнопка закрытия
  if (breakpoint.matches && evt.target.closest('[data-nav-toggle]')) {
    if (mainNav.classList.contains('is-opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  // нажатие на ссылки
  if (breakpoint.matches && evt.target.closest('.main-nav a[href]')) {
    if (mainNav.classList.contains('is-opened')) {
      closeMenu();
    }
  }
};

const onDocumentKeydown = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMenu();
  }
};


const updateYear = () => {
  mainNavList.dataset.year = (new Date()).getFullYear();
};


const initMainNav = () => {
  if (header && mainNav) {
    updateYear();
    document.addEventListener('click', onDocumentClick);
  }
};

export {initMainNav};
