// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============ SCROLL ANIMATIONS ============
const animatedEls = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
animatedEls.forEach(el => observer.observe(el));

// ============ MOBILE SIDEBAR ============
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.mobile-sidebar');
const overlay = document.querySelector('.mobile-menu-overlay');
const closeBtn = document.querySelector('.mobile-sidebar .close-btn');

function openMenu() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) overlay.addEventListener('click', closeMenu);

// close menu on link click
document.querySelectorAll('.mobile-sidebar a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ============ BOTTOM NAV ACTIVE STATE ============
const bottomLinks = document.querySelectorAll('.mobile-bottom-nav a');
bottomLinks.forEach(link => {
  link.addEventListener('click', () => {
    bottomLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============ SMOOTH COUNTER ANIMATION ============
function animateValue(el, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// ============ PARALLAX ON HERO ============
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    const scroll = window.scrollY;
    hero.style.transform = `translateY(${scroll * 0.3}px)`;
    hero.style.opacity = 1 - (scroll / 800);
  }
});
