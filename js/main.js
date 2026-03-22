// Hero scroll fade effect
const heroTop = document.querySelector('.hero__img--top');
let ticking = false;

function updateHeroFade() {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  const opacity = Math.max(0, 1 - scrollY / vh);
  heroTop.style.opacity = opacity;
  ticking = false;
}

window.addEventListener('scroll', function () {
  if (!ticking) {
    requestAnimationFrame(updateHeroFade);
    ticking = true;
  }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', function () {
  // Enable transition only after first interaction to prevent flash on breakpoint change
  navList.style.transition = 'opacity 0.35s ease, visibility 0.35s ease';
  const isOpen = navList.classList.toggle('open');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});

// Close menu on anchor click
navList.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navList.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

// Offset scroll for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});
