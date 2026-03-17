/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== TYPEWRITER EFFECT ===== */
const roles = [
  'Computer Science Student',
  'C++ Developer',
  'Python Enthusiast',
  'Web Developer',
  'Problem Solver',
];

let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = roles[roleIndex];
  typedEl.textContent = isDeleting
    ? current.slice(0, --charIndex)
    : current.slice(0, ++charIndex);

  let delay = isDeleting ? 55 : 100;
  if (!isDeleting && charIndex === current.length)  { delay = 1800; isDeleting = true; }
  else if (isDeleting && charIndex === 0)            { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }
  setTimeout(type, delay);
}
type();

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navMobile.classList.remove('open'))
);

/* ===== NAV HIGHLIGHT ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(sec => activeObserver.observe(sec));

/* ===== NAVBAR SHADOW ON SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(2, 8, 23, 0.92)';
    navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,.4)';
  } else {
    navbar.style.background = 'rgba(2, 8, 23, 0.7)';
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

/* ===== HERO REVEAL ===== */
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero .reveal');
  if (hero) setTimeout(() => hero.classList.add('visible'), 200);
});

/* ===== PHOTO UPLOAD ===== */
const photoUpload     = document.getElementById('photo-upload');
const profileImg      = document.getElementById('profile-img');
const photoPlaceholder = document.getElementById('photo-placeholder');

if (photoUpload) {
  photoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      profileImg.src = ev.target.result;
      profileImg.style.display = 'block';
      photoPlaceholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
}

/* ===== CERTIFICATE MODAL ===== */
const certModal      = document.getElementById('cert-modal');
const certModalImg   = document.getElementById('cert-modal-img');
const certModalTitle = document.getElementById('cert-modal-title');

function openCertModal(src, title) {
  certModalImg.src = src;
  certModalTitle.textContent = title;
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { certModalImg.src = ''; }, 300);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal();
});
