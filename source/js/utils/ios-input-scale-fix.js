import {iosChecker} from './ios-checker';

const iosInputScaleFix = () => {
  if (iosChecker()) {
    const vp = document.querySelector('meta[name="viewport"]');
    let content = vp.getAttribute('content');
    content = content + ', maximum-scale=1.0';
    vp.setAttribute('content', content);
  }
};

export {iosInputScaleFix};
