
// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size and position
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Input focus animations
function setupInputAnimations() {
    const inputs = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Typing animation effect
        input.addEventListener('input', function () {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Form submission animation
function setupFormAnimation() {
    const form = document.getElementById('loginForm');
    const successAnimation = document.getElementById('successAnimation');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Button loading animation
        const button = this.querySelector('.login-btn');
        const originalText = button.textContent;
        button.textContent = 'Signing In...';
        button.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

        // Simulate login process
        setTimeout(() => {
            button.style.display = 'none';
            successAnimation.style.display = 'block';

            setTimeout(() => {
                // Reset form (in real app, redirect to dashboard)
                button.style.display = 'block';
                button.textContent = originalText;
                button.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                successAnimation.style.display = 'none';

                // Clear form
                form.reset();
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('focused');
                });
            }, 2000);
        }, 1500);
    });
}

// Smooth entrance animation for form elements
function animateFormElements() {
    const formGroups = document.querySelectorAll('.form-group');
    const button = document.querySelector('.login-btn');
    const forgotPassword = document.querySelector('.forgot-password');

    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';

        setTimeout(() => {
            group.style.transition = 'all 0.6s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });

    // Animate button and forgot password link
    setTimeout(() => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(30px)';
        button.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 100);

        forgotPassword.style.opacity = '0';
        forgotPassword.style.transform = 'translateY(20px)';
        forgotPassword.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            forgotPassword.style.opacity = '1';
            forgotPassword.style.transform = 'translateY(0)';
        }, 200);
    }, 600);
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    setupInputAnimations();
    setupFormAnimation();
    animateFormElements();
});
