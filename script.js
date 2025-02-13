// Sliding Background (only if element exists)
const slidingBackground = document.querySelector('.sliding-background');
if (slidingBackground) {
  const backgroundImages = slidingBackground.querySelectorAll('img');
  let currentImageIndex = 0;

  function changeBackground() {
    backgroundImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImages[currentImageIndex].classList.add('active');
  }

  backgroundImages[currentImageIndex].classList.add('active');
  setInterval(changeBackground, 4000);
}

// Menu Toggle (safe for all pages)
const menuIcon = document.getElementById('menuIcon');
if (menuIcon) {
  menuIcon.addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  });
}

// Typing Animation (safe if elements exist)
const paragraphs = document.querySelectorAll('.typing-animation');
paragraphs.forEach((paragraph, index) => {
  paragraph.style.animationDelay = `${index * 6}s`;
  paragraph.style.opacity = 1;
  paragraph.style.width = "100%";
});
