class Preloader {
  constructor(props = {}) {
    this.DELAY = props.delay ? props.delay : 3000;
    this.ANIMATION_DELAY = props.animDelay ? props.animDelay : false;

    this.document = document.documentElement;
    this.preloader = document.querySelector('.preloader');

    this.timeStart = performance.now();

    this.finishEvent = new CustomEvent('preloader-finish');
    this.onLoad = this.onLoad.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  init() {
    if (!this.preloader) {
      window.addEventListener('load', this.showPage, {once: true});
      return;
    }

    window.addEventListener('load', this.onLoad, {once: true});
  }

  showPage() {
    if (this.preloader) {
      this.preloader.classList.add('is-hidden');
    }
    this.document.classList.add('is-loaded');

    document.body.classList.remove('scroll-lock');
    document.body.classList.remove('scroll-lock-ios');

    window.scrollTo(0, 0);
    window.dispatchEvent(this.finishEvent);
  }

  onLoad() {
    this.timeLoad = performance.now() - this.timeStart;
    const delay = this.timeLoad >= this.DELAY ? 0 : this.DELAY - this.timeLoad;

    setTimeout(() => {
      this.preloader.classList.add('preloader--state-two');

      if (this.ANIMATION_DELAY) {
        setTimeout(this.showPage, this.ANIMATION_DELAY);
      } else {
        this.showPage();
      }
    }, delay);
  }
}

export const initPreloader = () => {
  new Preloader().init();
};
