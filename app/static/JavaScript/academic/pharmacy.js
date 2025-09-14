// Career card interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to career cards
    document.querySelectorAll('.career-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease';
            setTimeout(() => { 
                this.style.animation = ''; 
            }, 600);
        });
    });

    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all career cards for animation
    document.querySelectorAll('.career-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover effect enhancement
    document.querySelectorAll('.career-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation for stat boxes
    document.querySelectorAll('.stat-value').forEach(stat => {
        const originalText = stat.textContent;
        stat.textContent = '0';
        
        setTimeout(() => {
            stat.textContent = originalText;
            stat.style.transition = 'all 0.3s ease';
        }, Math.random() * 1000 + 500);
    });
});