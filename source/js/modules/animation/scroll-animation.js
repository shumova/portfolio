class ScrollAnimation {
  constructor() {
    this.threshold = 0.05;
    this.rootMargin = '0px';
    this.observer = null;

    this.selector = '[data-animate]';
    this.animateClassName = 'show';
    this.mediaTouchDevice = window.matchMedia('(pointer: coarse)');
    this.touchDeviceChecker = this.touchDeviceChecker.bind(this);
  }

  init() {
    this.touchDeviceChecker();
    this.mediaTouchDevice.addListener(this.touchDeviceChecker);
  }

  touchDeviceChecker() {
    if (!this.mediaTouchDevice.matches) {
      this.initObserver();
      this.initAnimation();
    }
  }

  animate(el) {
    const delay = el.dataset.animateDelay || 100;

    setTimeout(() => {
      el.classList.add(this.animateClassName);
    }, delay);
  }

  animateReverse(el) {
    el.classList.remove(this.animateClassName);
  }

  initAnimation() {
    const els = document.querySelectorAll(this.selector);

    [...els].forEach((el) => this.observer.observe(el));
  }

  initObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const repeat = entry.target.getAttribute('data-animate-repeat') !== null;

        if (entry.intersectionRatio >= this.threshold) {
          this.animate(entry.target);

          if (!repeat) {
            observer.unobserve(entry.target);
          }
        } else if (repeat) {
          this.animateReverse(entry.target);
        }
      });
    }, {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    });
  }
}

export const initScrollAnimation = () => {
  new ScrollAnimation().init();
};
