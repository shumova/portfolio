const INCREASE = 'increase';
const DECREASE = 'decrease';

const action = {
  [INCREASE]: (value, boundary) => value < boundary ? ++value : value,
  [DECREASE]: (value, boundary) => value > boundary ? --value : value,
};

const getDataMax = (elem) => Number(elem.dataset.quantityMax);
const getDataMin = (elem) => Number(elem.dataset.quantityMin);

const changeQuantityField = (input, direction) => {
  const boundaries = {
    [INCREASE]: getDataMax(input),
    [DECREASE]: getDataMin(input),
  };

  input.value = action[direction](Number(input.value), boundaries[direction]);
};

const onDocumentClick = (evt) => {
  const component = evt.target.closest('.quantity');

  if (component) {
    const input = component.querySelector('[data-quantity-field]');

    if (evt.target.closest('[data-quantity-decrease]')) {
      changeQuantityField(input, DECREASE);
    } else if (evt.target.closest('[data-quantity-increase]')) {
      changeQuantityField(input, INCREASE);
    }
  }
};

const onDocumentBlur = (evt) => {
  let target = evt.target.closest('[data-quantity-field]');

  if (target) {
    if ((target.value === '') || (target.value < getDataMin(target))) {
      target.value = getDataMin(target);
    } else if (target.value > getDataMax(target)) {
      target.value = getDataMax(target);
    }
  }
};

const initQuantity = () => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('blur', onDocumentBlur, true);
};

export {initQuantity};
