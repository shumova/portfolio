class ScreenHeight {
  constructor() {
    this.document = document.documentElement;
    this.landscapeScreenHeight = null;
    this.portraitScreenHeight = null;
    this.mediaTouchDevice = window.matchMedia('(pointer: coarse)');
    this.mediaLandscape = window.matchMedia('(orientation: landscape)');
    this.touchDeviceChecker = this.touchDeviceChecker.bind(this);
    this.landscapeChecker = this.landscapeChecker.bind(this);
  }

  init() {
    this.touchDeviceChecker();
    this.mediaTouchDevice.addListener(this.touchDeviceChecker);
  }

  /*
    Проверяет мобильное устройство это или нет
    если да то добавляет слушатель на смену ориентации
    устройства чтобы зафиксировать переменную высоты
    экрана и избежать её скачков из-за браузерных панелей
    на iOS (возможно такое поведение есть и на Android)
  */

  touchDeviceChecker() {
    if (this.mediaTouchDevice.matches) {
      this.landscapeChecker();
      this.mediaLandscape.addListener(this.landscapeChecker);
    } else {
      this.document.style.removeProperty('--static-vh');
      this.mediaLandscape.removeListener(this.landscapeChecker);
    }
  }

  /*
    При первой смене ориентации на мобильном фиксирует высоту экрана
    и в дальнейшем пользуется только вычисленными значениями
  */

  landscapeChecker() {
    if (this.mediaLandscape.matches) {
      if (!this.landscapeScreenHeight) {
        this.landscapeScreenHeight = window.innerHeight;
      }

      this.document.style.setProperty('--static-vh', `${this.landscapeScreenHeight}px`);
    } else {
      if (!this.portraitScreenHeight) {
        this.portraitScreenHeight = window.innerHeight;
      }

      this.document.style.setProperty('--static-vh', `${this.portraitScreenHeight}px`);
    }
  }
}

export const staticVh = () => {
  new ScreenHeight().init();
};
