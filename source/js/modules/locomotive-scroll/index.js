import {LocoScroll} from './loco-scroll';

let locoScroll = null;

const initLocoScroll = () => {
  const container = document.querySelector('[data-scroll-container]');

  if (!container) {
    return;
  }

  const locoScrollEntity = new LocoScroll(container);

  locoScrollEntity.init();
  locoScroll = locoScrollEntity.scroll;

  window.ls = locoScroll;
};

export {initLocoScroll, locoScroll};
