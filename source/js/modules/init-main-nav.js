

class MainNav {
  constructor() {
    this.selector = '[data-main-nav]';
    this.animateClassName = 'show';
  }

  init() {
    this.getLinks();
  }

  handleMainNavLinkClick(evt) {
    const hash = new URL(this.href).hash;
    const chapter = document.querySelector(hash);
    const showedEls = chapter.querySelectorAll('.show');

    if (showedEls.length) {
      evt.preventDefault();

      [...showedEls].forEach((el) => el.classList.remove('show'));

      this.click();

      setTimeout(() => {
        [...showedEls].forEach((el) => el.classList.add('show'));
      }, 100);
    }
  }

  getLinks() {
    const mainNav = document.querySelector(this.selector);
    const mainNavLinks = mainNav.querySelectorAll('a');

    [...mainNavLinks].forEach((el) => el.addEventListener('click', this.handleMainNavLinkClick));
  }
}

export const initMainNav = () => {
  new MainNav().init();
};
