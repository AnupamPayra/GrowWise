// Grade selection functionality
const gradeBtns = document.querySelectorAll('.grade-btn');
const subjectCards = document.querySelectorAll('.subject-card');

gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        gradeBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const selectedGrade = btn.dataset.grade;
        
        // Update subjects based on grade
        updateSubjects(selectedGrade);
    });
});

function updateSubjects(grade) {
    const subjectsGrid = document.getElementById('subjectsGrid');
    
    if (grade === '10') {
        subjectsGrid.innerHTML = `
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Arts</h3>
                <p class="text-slate-300 text-sm leading-relaxed">History, Literature, Philosophy, Sociology, and creative analytical techniques</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Science</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Physics, Chemistry, Biology with practical applications and experiments</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Commerce</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Accounting, Business Studies, Economics, Finance, and analytical business skills</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Vocational</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Skill Development, Practical Training, Technical Expertise, and hands-on project techniques</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Hotel Management</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Hospitality, Food & Beverage, Front Office, Event Management, and customer service skills</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Graphic Design</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Visual Communication, Typography, Illustration, UI/UX, and creative design methods</p>
            </div>
        `;
    } else if (grade === '12') {
        subjectsGrid.innerHTML = `
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Advanced Mathematics</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Calculus, Statistics, Algebra, Geometry with real-world applications</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Physics</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Mechanics, Thermodynamics, Optics, Modern Physics concepts</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Chemistry</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Organic, Inorganic, Physical Chemistry with laboratory work</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Biology</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Cell Biology, Genetics, Ecology, Human Physiology</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">Computer Science</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Programming, Data Structures, Database Management, Web Development</p>
            </div>
            <div class="gradient-card rounded-2xl p-6 shadow-xl card-modern">
                <h3 class="text-xl font-black text-white mb-2">English Literature</h3>
                <p class="text-slate-300 text-sm leading-relaxed">Poetry, Drama, Prose, Literary Analysis, Creative Writing</p>
            </div>
        `;
    }

    // Add hover animations to new cards
    addCardAnimations();
}

function addCardAnimations() {
    document.querySelectorAll('.gradient-card, .subject-card').forEach(card => {
        // Clean up old event listeners
        card.removeEventListener('click', cardClickHandler);
        card.removeEventListener('mouseenter', cardMouseEnterHandler);
        card.removeEventListener('mouseleave', cardMouseLeaveHandler);
        
        // Add new event listeners
        card.addEventListener('click', cardClickHandler);
        card.addEventListener('mouseenter', cardMouseEnterHandler);
        card.addEventListener('mouseleave', cardMouseLeaveHandler);
    });
}

// Event handler functions
function cardClickHandler() {
    this.style.transform = 'scale(0.98) translateY(-5px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    }, 150);
}

function cardMouseEnterHandler() {
    this.style.transition = 'all 0.3s ease';
    this.style.transform = 'translateY(-10px) scale(1.02)';
}

function cardMouseLeaveHandler() {
    this.style.transform = 'translateY(0) scale(1)';
}

// Tab functionality for study materials
const tabBtns = document.querySelectorAll('.tab-btn');
const materialContents = document.querySelectorAll('.material-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        materialContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.dataset.tab;
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Add click effects to material items
function initializeMaterialItems() {
    document.querySelectorAll('.material-item').forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.98)';
            setTimeout(() => {
                item.style.transform = 'translateX(10px)';
            }, 150);
        });
    });
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade-in animation for elements on scroll
function initializeScrollAnimations() {
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
    
    document.querySelectorAll('.feature-card, .material-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Button effects
function initializeButtonEffects() {
    document.querySelectorAll('.grade-btn, .tab-btn').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    addCardAnimations();
    initializeMaterialItems();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeButtonEffects();
});

// Initialize animations on page load
window.addEventListener('load', () => {
    addCardAnimations();
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Tab navigation for grade buttons
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeGradeBtn = document.querySelector('.grade-btn.active');
        if (activeGradeBtn) {
            const gradeBtnsArr = Array.from(document.querySelectorAll('.grade-btn'));
            const currentIndex = gradeBtnsArr.indexOf(activeGradeBtn);

            let newIndex;
            if (e.key === 'ArrowLeft') {
                newIndex = (currentIndex - 1 + gradeBtnsArr.length) % gradeBtnsArr.length;
            } else {
                newIndex = (currentIndex + 1) % gradeBtnsArr.length;
            }

            gradeBtnsArr[currentIndex].classList.remove('active');
            gradeBtnsArr[newIndex].classList.add('active');
            gradeBtnsArr[newIndex].focus();

            const selectedGrade = gradeBtnsArr[newIndex].dataset.grade;
            updateSubjects(selectedGrade);
        }
    }
});
