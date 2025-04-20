document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector('.features-video video');
    const playBtn = document.querySelector('.features-video .play-btn');

    // Toggle play/pause on video click
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
      } else {
        video.pause();
        playBtn.style.display = 'flex';
      }
    });

    // Also toggle play/pause on play button click
    playBtn.addEventListener('click', () => {
      video.play();
      playBtn.style.display = 'none';
    });

    // Show play button again when video ends
    video.addEventListener('ended', () => {
      playBtn.style.display = 'flex';
    });
  });