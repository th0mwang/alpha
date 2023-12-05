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
      iconButton.style.opacity = '50%'; // Show the button when video plays
  }

  function pauseVideo() {
      hoverVideo.pause();
      hoverVideo.currentTime = 0;
      thumbnail.style.opacity = '0%';
      iconButton.style.opacity = '0%'; // Hide the button when video pauses
      buttonCheck.style.opacity = '100%'; // Hide the button_check when video pauses
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
  }

  function bounceOut() {
      // Play the animation and show the check button when the animation ends
      buttonCheck.classList.remove('hidden');
      buttonCheck.classList.add('play-animation');
      buttonCheck.addEventListener('animationend', function () {
          buttonCheck.classList.remove('play-animation');
      });

      // Hide the main button
      button.classList.add('hidden');

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

  // Event listener for buttonCheck
  buttonCheck.addEventListener('mouseover', handleButtonHover);
  buttonCheck.addEventListener('mouseout', handleButtonOut);

  // Event listener for bounceOutButton
  bounceOutButton.addEventListener('click', bounceOut);

  // Check the video status every 100 milliseconds
  setInterval(function () {
      if (isHovered && hoverVideo.paused) {
          playVideo();
      } else if (!isHovered && !hoverVideo.paused) {
          pauseVideo();
      }
  }, 100);
});
