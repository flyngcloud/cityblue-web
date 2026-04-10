// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Hero background slider
const slides = document.querySelectorAll('.hero-slide');
if (slides.length) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// Hero rotating word
const rotatingEl = document.querySelector('.hero-rotating');
if (rotatingEl) {
  const words = ['Print', 'Design', 'Supply'];
  let wordIndex = 0;
  setInterval(() => {
    rotatingEl.classList.add('fade');
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatingEl.textContent = words[wordIndex];
      rotatingEl.classList.remove('fade');
    }, 400);
  }, 3000);
}

// Static hero slider — reads images from WordPress data-images attribute
const heroSection = document.getElementById('hero');
if (heroSection) {
  const dataImages = heroSection.getAttribute('data-images');
  if (dataImages) {
    const images = JSON.parse(dataImages.replace(/\\\//g, '/'));
    const wrapper = heroSection.querySelector('.hero-slideshow-wrapper') || heroSection;
    let current = 0;
    const setHeroBg = (i) => {
      wrapper.style.backgroundImage = `url('${images[i]}')`;
      wrapper.style.backgroundSize = 'cover';
      wrapper.style.backgroundPosition = 'center';
      wrapper.style.transition = 'background-image 1s ease';
    };
    setHeroBg(0);
    setInterval(() => {
      current = (current + 1) % images.length;
      setHeroBg(current);
    }, 5000);
  }
}

// Rotating text in hero
const jsRotating = document.querySelector('.js-rotating');
if (jsRotating) {
  const words = jsRotating.textContent.split(' | ').map(w => w.trim());
  let idx = 0;
  jsRotating.textContent = words[0];
  setInterval(() => {
    jsRotating.style.opacity = '0';
    setTimeout(() => {
      idx = (idx + 1) % words.length;
      jsRotating.textContent = words[idx];
      jsRotating.style.opacity = '1';
    }, 400);
  }, 3000);
  jsRotating.style.transition = 'opacity 0.4s ease';
  jsRotating.style.color = '#00aeef';
}
