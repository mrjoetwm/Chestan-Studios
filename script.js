
 // Three.js 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
// Add 3D text
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textGeometry = new THREE.TextGeometry('Welcome', {
    font: font,
    size: 1,
    height: 0.2,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 0, 0);
  scene.add(textMesh);
});

camera.position.z = 5;


// Rest of the code remains the same
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
