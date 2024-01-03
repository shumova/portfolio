function throttle(ms, func) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {

    if (isThrottled) {
      // eslint-disable-next-line
      savedArgs = arguments;
      // eslint-disable-next-line
      savedThis = this;
      return;
    }

    isThrottled = true;

    // eslint-disable-next-line
    func.apply(this, arguments);

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function debounce(ms, func) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    // eslint-disable-next-line
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

export {throttle, debounce};
