// Career card interactions
document.querySelectorAll('.career-card').forEach(card => {
    card.addEventListener('click', function () {
        // Add a pulse animation
        this.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Smooth scroll for quick navigation
document.querySelectorAll('.quick-nav-item').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetCard = document.querySelector(`.career-card[data-career="${targetId}"]`);

        if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
            targetCard.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                targetCard.style.animation = '';
            }, 600);
        }
    });
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to stat boxes
    document.querySelectorAll('.stat-box').forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add fade-in effect for cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide cards and observe them
    document.querySelectorAll('.career-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});