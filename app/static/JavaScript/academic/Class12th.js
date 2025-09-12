const gradeBtns = document.querySelectorAll('.grade-btn');
const subjectsGrid = document.getElementById('subjectsGrid');

gradeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gradeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedGrade = btn.dataset.grade;
    updateSubjects(selectedGrade);
  });
});

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

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

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Dark mode functionality
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    darkToggle.innerHTML = isDark
      ? '<span class="text-xl">☀</span>'
      : '<span class="text-xl">🌙</span>';
  });
}
