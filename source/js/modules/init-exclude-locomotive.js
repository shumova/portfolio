// чтобы при использовании loomotive-scroll прокрутка внутри блока не прокручивала всю страницу,
// этому блоку необходимо задать атрибут data-exclude-locomotive

import {locoScroll} from './locomotive-scroll/index';

const onMouseOver = (evt) => {
  if (evt.target.closest('[data-exclude-locomotive]')) {
    locoScroll.stop();
  }
};

const onMouseOut = (evt) => {
  if (evt.target.closest('[data-exclude-locomotive]')) {
    locoScroll.start();
  }
};

const initExcludeLocomotive = () => {
  const locoStopBlocks = document.querySelector('[data-exclude-locomotive]');

  if (locoStopBlocks) {
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
  }
};

export {initExcludeLocomotive};
