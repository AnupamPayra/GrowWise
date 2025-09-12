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

// Function to add animations
function addCardAnimations() {
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
    });
}

// Initialize animations on page load
window.addEventListener('load', () => {
    addCardAnimations();
});

// Placeholder function for grade filtering
function updateSubjects(grade) {
    subjectCards.forEach(card => {
        if (card.classList.contains(`grade-${grade}`)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
