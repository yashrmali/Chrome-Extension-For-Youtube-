window.addEventListener('blur', function() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  });
  
  window.addEventListener('focus', function() {
    const video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  });
  