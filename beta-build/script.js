document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("hover-video");
    const fadeImage = document.getElementById("image-overlay");
    const progressBar = document.querySelector(".progress");
  
    video.addEventListener("timeupdate", () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      const progress = (currentTime / duration) * 100;
      progressBar.style.width = progress + "%";
    });
  
    fadeImage.addEventListener("mouseover", () => {
      fadeImage.style.opacity = 0;
      video.play();
    });
  
    fadeImage.addEventListener("mouseout", () => {
      fadeImage.style.opacity = 1;
      video.pause();
      video.currentTime = 0;
    });
  
    video.addEventListener("mouseover", () => {
      fadeImage.style.opacity = 0;
      video.play();
    });
  
    video.addEventListener("mouseout", () => {
      fadeImage.style.opacity = 1;
      video.pause();
      video.currentTime = 0;
    });
  });