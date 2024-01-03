const videoWrappers = document.querySelectorAll('[data-video]');

const setupVideoAction = (videoWrapper) => {
  const video = videoWrapper.querySelector('video');
  const controlBtn = videoWrapper.querySelector('[data-video-control]');

  if (!(video && controlBtn)) {
    return;
  }

  video.controls = false;

  controlBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('pause', () => {
    if (!video.seeking) {
      video.controls = false;
      videoWrapper.classList.remove('is-playing');
    }
  });

  video.addEventListener('play', () => {
    video.controls = true;
    videoWrapper.classList.add('is-playing');
  });
};

const initVideo = () => {
  if (videoWrappers.length <= 0) {
    return;
  }

  videoWrappers.forEach((videoWrapper) => {
    setupVideoAction(videoWrapper);
  });
};

export {initVideo};
