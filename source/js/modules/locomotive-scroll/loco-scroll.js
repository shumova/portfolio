import {debounce} from '../../utils/throttle-debounce';
import LocomotiveScroll from '../../vendor/locomotive-scroll';

class LocoScroll {
  constructor(container) {
    this.el = container;
    this.scroll = null;
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: this.el,
      smooth: true,
      getDirection: true,
      getSpeed: true,
    });

    window.addEventListener('resize', debounce(500, () => {
      this.scroll.update();
    }));
  }
}

export {LocoScroll};
