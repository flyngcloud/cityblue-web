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
