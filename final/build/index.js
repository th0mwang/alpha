document.addEventListener('DOMContentLoaded', function () {
  const hoverVideo = document.getElementById('hover');
  const thumbnail = document.getElementById('thumbnail');
  const iconButton = document.querySelector('#icon button');
  const button = document.getElementById('video-control');
  const buttonCheck = document.getElementById('video-control-check');
  const bounceOutButton = document.getElementById('bounce-out');

  let isHovered = false; // Flag to track whether the thumbnail or button is being hovered

  function playVideo() {
    hoverVideo.play();
    thumbnail.style.opacity = '0%';
    iconButton.style.opacity = '50%';
  }

  function pauseVideo() {
    hoverVideo.pause();
    hoverVideo.currentTime = 0;
    thumbnail.style.opacity = '0%';
    iconButton.style.opacity = '0%';
    buttonCheck.style.opacity = '100%';
  }

  function handleThumbnailHover() {
    isHovered = true;
    playVideo();
  }

  function handleThumbnailOut() {
    isHovered = false;
    pauseVideo();
  }

  function handleButtonHover() {
    isHovered = true;
    playVideo();
  }

  function handleButtonOut() {
    isHovered = false;
    pauseVideo();
  }

  function toggleButtons() {
    button.classList.toggle('hidden');
    buttonCheck.classList.toggle('hidden');

    // Play the animation for both buttons when toggling
    buttonCheck.classList.add('play-animation');
    button.addEventListener('animationend', function () {
      buttonCheck.classList.remove('play-animation');
    });

    button.classList.add('play-animation');
    button.addEventListener('animationend', function () {
      button.classList.remove('play-animation');
    });
  }

  function bounceOut() {
    // Play the animation for both buttons and show the check button when the animation ends
    buttonCheck.classList.remove('hidden');
    buttonCheck.classList.add('play-animation');
    buttonCheck.addEventListener('animationend', function () {
      buttonCheck.classList.remove('play-animation');
    });

    button.classList.remove('hidden');
    button.classList.add('play-animation');
    button.addEventListener('animationend', function () {
      button.classList.remove('play-animation');
    });

    // Play the video
    playVideo();
  }

  // Event listeners for thumbnail
  thumbnail.addEventListener('mouseover', handleThumbnailHover);
  thumbnail.addEventListener('mouseout', handleThumbnailOut);

  // Event listeners for buttons
  iconButton.addEventListener('mouseover', handleButtonHover);
  iconButton.addEventListener('mouseout', handleButtonOut);
  button.addEventListener('click', toggleButtons);
  buttonCheck.addEventListener('click', toggleButtons);

  // Check the video status every 100 milliseconds
  setInterval(function () {
    if (isHovered && hoverVideo.paused) {
      playVideo();
    } else if (!isHovered && !hoverVideo.paused) {
      pauseVideo();
    }
  }, 100);
});
