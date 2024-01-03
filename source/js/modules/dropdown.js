const dropdowns = document.querySelectorAll('[data-dropdown]');

const onDocumentMouseDown = ({target}) => {
  if (!target.closest('[data-dropdown]')) {
    closeDropdown();
  }
};

const onEscapePress = (e) => {
  const isEscape = e.key === 'Escape';
  if (isEscape) {
    closeDropdown();
  }
};

const closeDropdown = () => {
  const activeDropdown = document.querySelector('[data-dropdown].active');
  document.removeEventListener('mousedown', onDocumentMouseDown);
  document.removeEventListener('keydown', onEscapePress);
  if (activeDropdown) {
    activeDropdown.classList.remove('active');
  }
};

const onBtnClick = (evt) => {
  const parent = evt.target.closest('[data-dropdown]');
  const activeSelect = document.querySelector('[data-dropdown].active');

  if (activeSelect && activeSelect === parent) {
    activeSelect.classList.remove('active');
    return;
  }

  if (activeSelect) {
    closeDropdown();
  }

  document.addEventListener('mousedown', onDocumentMouseDown);
  document.addEventListener('keydown', onEscapePress);

  if (parent.classList.contains('active')) {
    parent.classList.remove('active');
  } else {
    parent.classList.add('active');
  }
};

const initDropdown = () => {
  if (dropdowns.length <= 0) {
    return;
  }

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector('[data-dropdown-btn]');
    if (!btn) {
      return;
    }

    btn.addEventListener('click', onBtnClick);
  });
};

export {initDropdown};
