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

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
// Typing Animation for About Us Write-Up
const paragraphs = document.querySelectorAll('.typing-animation');

paragraphs.forEach((paragraph, index) => {
  // Add a delay to each paragraph for sequential animation
  paragraph.style.animationDelay = `${index * 6}s`;
  paragraph.style.opacity = 1; // Make text visible after animation
  paragraph.style.width = "100%"; // Ensure the text container expands to full width
});


// Sliding Background
const backgroundImages = document.querySelectorAll('.sliding-background img');
let currentImageIndex = 0;

function changeBackground() {
    // Hide the current image
    backgroundImages[currentImageIndex].classList.remove('active');

    // Move to the next image (loop back to 0 after the last image)
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;

    // Show the next image
    backgroundImages[currentImageIndex].classList.add('active');
}

// Show the first image initially
backgroundImages[currentImageIndex].classList.add('active');

// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 4000);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}