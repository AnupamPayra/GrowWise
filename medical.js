// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    darkToggle.innerHTML = isDark ? '<span class="text-xl">☀</span>' : '<span class="text-xl">🌙</span>';
  });
}

// Profile menu toggle
const profileCircle = document.getElementById('profile-circle');
const profileMenu = document.getElementById('profile-menu');
const closeMenuBtn = document.getElementById('close-menu');

if (profileCircle && profileMenu && closeMenuBtn) {
  profileCircle.addEventListener('click', (event) => {
    event.stopPropagation();
    profileMenu.classList.toggle('open');
  });

  closeMenuBtn.addEventListener('click', () => {
    profileMenu.classList.remove('open');
  });

  document.addEventListener('click', (event) => {
    if (!profileMenu.contains(event.target) && !profileCircle.contains(event.target)) {
      profileMenu.classList.remove('open');
    }
  });
}

// Scroll-based animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up, .slide-in').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
