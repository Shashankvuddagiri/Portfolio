// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 900,
  once: true,
  offset: 80
});

// Initialize Feather Icons
feather.replace();

// Animated Counters (GSAP)
document.addEventListener('DOMContentLoaded', () => {
  const counters = [
    { selector: '#counter-projects', end: 5 },
    { selector: '#counter-certifications', end: 4 },
    { selector: '#counter-volunteering', end: 1 },
    { selector: '#counter-achievements', end: 5 }
  ];
  counters.forEach(({selector, end}) => {
    const el = document.querySelector(selector);
    if (el) {
      gsap.fromTo(el, { innerText: 0 }, {
        innerText: end,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        },
        onUpdate: function() {
          el.innerText = Math.floor(el.innerText);
        }
      });
    }
  });
});

// Smooth Navigation
const navLinks = document.querySelectorAll('nav#navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let darkMode = true;
themeToggle && themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.documentElement.setAttribute('data-theme', darkMode ? '' : 'light');
  themeToggle.innerHTML = darkMode ? '<i data-feather="moon"></i>' : '<i data-feather="sun"></i>';
  feather.replace();
});

// Scroll-to-top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      e.preventDefault();
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return false;
    }
  });
} 
